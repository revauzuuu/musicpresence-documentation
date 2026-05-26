import os

from dotenv import load_dotenv

load_dotenv()


def define_env(env):
    env.variables["contact_email"] = os.getenv('CONTACT_EMAIL', "contact@example.com")
