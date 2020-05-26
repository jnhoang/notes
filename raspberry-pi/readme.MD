* [guide](https://www.youtube.com/watch?v=goToXTC96Co)

## update software
apt update && apt upgrade


## set hostname
* TODO - find out why
1. set hostname
  * hostnamectl set-hostname <HOSTNAME>
2. change hostname in hostfile as well
  * vi /etc/hosts
  * <IP_ADDRESS> <HOST_NAME>


## create limited user
1. add user
  * adduser <USERNAME>
2. add user to sudo group
  * adduser coreyms sudo

then login as created user


## setup ssh key-based auth
* [further learning on key-based auth](https://www.youtube.com/watch?v=vpk_1gldOAE)

(on remote/raspberry-pi)
1. create ~/.ssh
  * mkdir .ssh

(on local machine)
2. generate key
  * ssh-keygen -b 4096
(on remote/raspberry-pi)
3. move public key over to host
  * scp ~/.ssh/id_rsa.pub <USERNAME>@<HOST_IP>:<LOCATION> (me@1.1.1.1:~/.ssh/authorized_keys)


## update permissions
* grant permissions to login w/ ssh key only (no password needed)

sudo chmod 700 ~/.ssh/ (RWE)
sudo chmod ~/.ssh/*
[https://youtu.be/goToXTC96Co?t=1310](timestamp)


## remove root login
* sudo vi /etc/ssh/sshd_config
* find `PermitRootLogin` -> no
* find `PasswordAuthentication`
  * uncomment it, change value from yes to no


## restart ssh service
sudo systemctl restart sshd


## setup firewall
```
sudo apt install ufw
sudo ufw default allow outgoing
sudo ufw default deny incoming
sudo ufw allow ssh
```
* add any other ports you want to
  * example (allow port 5000) `sudo ufw allow 5000`

sudo ufw enable

* ufw commands
`sudo ufw status`
sudo ufw allow http/tcp
* remove 5000 port open
sudo ufw delete allow 5000



## supervisor (auto start/restart apps)
sudo apt install supervisor
sudo vi /etc/supervisor/conf.d/<SOME_TASK>
```
[program:<EXAMPLE_PROGRAM>]
directory=/path/to/directory
command=/path/to/executor rest of the command
user=<USER_TO_RUN_THE_COMMAND>
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
stderr_logfile=/var/log/app/app.err.log
stdout_logfile=/var/log/app/app.out.log
```

### make the log location (if necessary)
mkdir /var/log/app/
touch /the/log/files.log


## find pi address
ping raspberrypi.local

## update node
https://medium.com/@bipul.k.kuri/upgrade-node-js-npm-in-raspbian-on-raspberry-pi-f1bcdaa23db5



## things to install
docker/docker-compose

```
curl -sSL https://get.docker.com | sh

# permission for pi user to run docker commands
sudo usermod -aG docker pi

sudo apt-get install -y libffi-dev libssl-dev
sudo apt-get install -y python3 python3-pip
sudo apt-get remove python-configparser
sudo pip3 install docker-compose


```

