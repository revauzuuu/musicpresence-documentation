import os

from dotenv import load_dotenv

load_dotenv()


def define_env(env):
    env.variables["privacy_contact_email"] = os.getenv('PRIVACY_CONTACT_EMAIL', "privacy@example.com")
