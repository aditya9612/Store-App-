import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PROJECT_NAME: str = "Store Management API"
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL", "mysql+pymysql://root:password@localhost:3306/store_app"
    )

settings = Settings()

