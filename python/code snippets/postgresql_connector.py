""" POSTGRESQL DB class """
""" POSTGRESQL DB class """
import psycopg2
import os
from dotenv  import load_dotenv
from os.path import join, dirname


class BadRequestException(Exception):
  pass
class DatabaseUniqueException(Exception):
  pass

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)


class DbConnector():

  host     =  os.getenv('DB_HOST')
  port     =  os.getenv('DB_PORT')
  user     =  os.getenv('DB_USER')
  password =  os.getenv('DB_PASSWORD')
  db_name  =  os.getenv('DB_NAME')


  def __init__(self):
    self.initialize_conn()


  def initialize_conn(self):
    self.conn =  psycopg2.connect(
      host     =  self.host,
      port     =  self.port,
      user     =  self.user,
      password =  self.password,
      dbname   =  self.db_name, )
    return


  def get_conn(self):
    try:
      if self.conn == None or self.conn.closed == 1:
        logger.debug('conn down, reinitializing')
        self.initialize_conn()
      else:
        return self.conn

    except Exception:
      logger.exception('db_connector.get_conn error')
      raise


  def execute_sql(self, function, sql, vals=None, is_close_conn=True):
    try:
      self.get_conn()
      cursor =  self.conn.cursor()
      cursor.execute(sql, vals)
      result = function(cursor)
    except psycopg2.errors.UniqueViolation:
      logger.exception('db_connector unique constraint violation', extra={'sql': sql, 'vals': vals})
      self.rollback()
      raise DatabaseUniqueException()
    except psycopg2.Error as e:
      logger.exception('some psycopg error', extra={'sql': sql, 'vals': vals, 'pg_code': e.pgcode})
      self.rollback()
      raise
    except Exception as e:
      logger.exception('unknown database execution error', extra={'sql': sql, 'vals': vals, 'error': str(e)})
      self.rollback()
      raise

    if is_close_conn:
      self.conn.commit()
      self.conn.close()

    return result


  def commit_sql(self, cursor=None):
    try:
      self.conn.commit()
      self.conn.close()
      return
    except:
      print('bruh, already done')


  def process_insert_results(self, cursor):
    status_message =  cursor.statusmessage

    return { 'status_message' :  status_message, }


  def process_update_results(self, cursor) :
    status_message =  cursor.statusmessage

    if status_message == 'UPDATE 0':
      raise BadRequestException('id does not exist')

    return { 'status_message' :  status_message, }


  def process_select_results(self, cursor) :
    status_message =  cursor.statusmessage
    col_names      =  [ desc[0] for desc in cursor.description ]
    results        =  cursor.fetchall()

    return {
      'status_message' :  status_message,
      'results'        :  results,
      'col_names'      :  col_names,
    }


  def process_delete_results(self, cursor) :
    status_message =  cursor.statusmessage
    return { 'status_message': status_message, }


  def rollback(self) :
    self.conn.rollback()
    self.conn.close()
    return
