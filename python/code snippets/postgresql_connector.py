""" POSTGRESQL DB class """
from dotenv  import load_dotenv
from os.path import join, dirname
import psycopg2

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)


class Helper():
  def __init__(self):
    self.conn        =  self.get_conn()
  def get_conn(self):
    try:
      return psycopg2.connect(
        host     =  os.getenv(DB_HOST),
        port     =  os.getenv(DB_PORT),
        user     =  os.getenv(DB_USER),
        password =  os.getenv(DB_PASSWORD),
        dbname   =  os.getenv(DB_NAME))
    except Exception as ex:
      print('exception!!! OpenMT_DB.select: ', ex)
      raise
  def execute_sql(self, sql, vals, function):
    conn   =  self.conn
    cursor =  conn.cursor()
    try:
      cursor.execute(sql, vals)
      return function(cursor)
    except psycopg2.Error as e:
      extra = {'sql': sql, 'vals': vals, 'pg_code': e.pgcode, 'pg_error': e.pgerror}
      print('\nFailed sql execute')
      print(extra)
      self.rollback()
      raise
    except Exception as ex:
      extra = {'sql': sql, 'vals': vals, 'ex': str(ex)}
      print('\nFailed sql execute')
      print(extra)
      self.rollback()
      raise
  def commit_sql(self, cursor=None):
    self.conn.commit()
    self.conn.close()
    return
  def insert_results(self, cursor):
    pkeys = [ key[0] for key in cursor.fetchall() ]
    return pkeys
  def update_results(self, cursor):
    status_message =  cursor.statusmessage
    pkeys          =  [ key[0] for key in cursor.fetchall() ]
    return status_message, pkeys
  def select_results(self, cursor):
    col_names     =  [desc[0] for desc in cursor.description]
    subscriptions =  cursor.fetchall()
    return subscriptions, col_names
  def delete_results(self, cursor):
    status_message = cursor.statusmessage
    return status_message
  def status_results(self, cursor):
    status_message = cursor.statusmessage
    return status_message
  def rollback(self):
    self.conn.rollback()
    self.conn.close()
    return
