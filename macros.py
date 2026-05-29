import os

from dotenv import load_dotenv

load_dotenv()


def define_env(env):
    env.variables["contact_email"] = os.getenv('CONTACT_EMAIL', "contact@example.com")

    env.variables["musicpresence_homepage"] = "https://musicpresence.app"
    env.variables["musicpresence_github_repository"] = "https://github.com/ungive/discord-music-presence"

    # TODO Load and cache the most recent version from the GitHub API.
    # TODO Automatically rebuild the site when a new version is published.
    env.variables["download_urls"] = {
        "win_x64_installer": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-windows-x64-installer.exe",
        "win_x64_zip": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-windows-x64.zip",
        "mac_arm64_dmg": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-mac-arm64.dmg",
        "mac_x86_64_dmg": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-mac-x86_64.dmg",
        "linux_x86_64_appimage": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-linux-x86_64.AppImage",
        "linux_x86_64_deb": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-linux-x86_64.deb",
        "linux_x86_64_rpm": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-linux-x86_64.rpm",
        "linux_x86_64_targz": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-linux-x86_64.tar.gz",
    }
