"""
  PRINT MULTIPLE LINE COMMENTS CLEANLY
  * note the use of a tupe
  * note that there are no commas
  * pros
    * better than the \ multi-line method because the \ conserves indenting whereas the tuple method does not
  * cons
    * requ'res you to declare your own \n
"""
multi_line_tuple = (
  "line 1\n"
  "line 2\n"
  "line 3\n"
)
print(multi_line_tuple)



"""
  READ FROM A .ENV FILE
  * pip install python-dotenv
"""
from dotenv  import load_dotenv
from os.path import join, dirname
dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)



"""
  programmatic acces to SSM Resource
  * have your aws cli creds in your ~/aws/credentials file
"""
def get_variable(variable_name_in_ssm: str):
  ssm_client     =  boto3.client('ssm', region_name='us-west-2')
  variable:str   =  ssm_client.get_parameter(Name=variable_name_in_ssm,WithDecryption=True).get('Parameter').get('Value')
  return variable


"""
  get multiDict values from query params
  * how get the email and uuid value from this qs: `/api/profile_details?desired_details=email&desired_details=uuid`
"""
# flask
query_string : Dict = request.args.getlist('desired_details')



"""
  open a file
"""
def open(file_location):
  with open(f'{file_location}', 'r') as f:
    file = f.read()
    f.close()

  return file


"""
  open json file
"""
import json

def open_json(file_location):
  with open(file_location, 'r+') as f:
    file_data = json.load(f)
  return file_data


"""
  save json to file
"""
import json

def open_json(file_location, json_data):
  with open(file_location, 'w') as f:
    f.write(json.dumps(json_data, indent=2))
    f.close()

  return


"""
  check if path exists than open a file
"""
import os

def open_file_in_dir(directory, file_location):
  if os.path.exists(f'{directory}/{file_location}'):
    return
  else:
    os.mkdir(f'{directory}/{file_location}')

  with open(f'{file_location}', 'r') as f:
    file = f.read()
    f.close()

  return file
