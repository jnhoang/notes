@current_balance = 5500

def check_balance
  puts @current_balance
end

def prompt_task
  task = '';
  until task == 'deposit' || task == 'withdraw' || task == 'check_balance'
    puts "What would you like to do? (deposit, withdraw, check_balance)"
    task = gets.chomp
  end
  do_task(task)
end

def do_task(task)
  case task
    when 'deposit' 
      deposit()
    when 'withdraw'
      withdraw()
    when 'check_balance'
      check_balance()
  end
end

def deposit
  puts "How much would you like to deposit?"
  deposit_amount = gets.chomp.to_i
  @current_balance += deposit_amount
  check_balance()
end

def withdraw

  puts "How much would you like to withdraw"
  withdraw_amount = gets.chomp.to_i
  
  if withdraw_amount < @current_balance
    @current_balance -= withdraw_amount
    check_balance()
  else
    puts "I'm sorry, you do not have the amount in your account"
  end
  
end

check_balance
prompt_task