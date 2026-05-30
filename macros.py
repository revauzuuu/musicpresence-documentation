import os
from urllib.parse import urlparse

from dotenv import load_dotenv

load_dotenv()


def create_download_info_dict(data: dict) -> str:
    if not "url" in data or not data["url"]:
        raise ValueError("Missing URL in download info input dictionary")
    url = data["url"]
    display = {}
    markdown_link_text = ""
    if "name" in data:
        display["name"] = data["name"]
        markdown_link_text += display["name"]
    if "type" in data:
        display["type"] = data["type"]
        markdown_link_text += " " + display["type"]
    if "arch" in data:
        display["arch"] = data["arch"]
        markdown_link_text += " " + display["arch"]
    if "icon" in data:
        display["icon"] = data["icon"]
    return {
        "url": url,
        "filename": os.path.basename(urlparse(url).path),
        "display": display,
        "markdown": {
            "link": f"<nobr>[**{markdown_link_text.strip()}**]({url.strip()})</nobr>"
        },
    }



def define_env(env):
    env.variables["contact_email"] = os.getenv('CONTACT_EMAIL', "contact@example.com")

    env.variables["musicpresence_homepage"] = "https://musicpresence.app"
    env.variables["musicpresence_github_repository"] = "https://github.com/ungive/discord-music-presence"

    # TODO Load and cache the most recent version from the GitHub API.
    # TODO Automatically rebuild the site when a new version is published.
    env.variables["downloads"] = {
        "win_x64_installer": create_download_info_dict({
            "name": "Windows",
            "type": "Installer",
            "arch": "x64",
            "icon": "windows",
            "url": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-windows-x64-installer.exe",
        }),
        "win_x64_zip": create_download_info_dict({
            "name": "Windows",
            "type": "zip",
            "arch": "x64",
            "icon": "windows",
            "url": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-windows-x64.zip",
        }),
        "mac_arm64_dmg": create_download_info_dict({

            "name": "Mac",
            "type": "Apple Silicon",
            "icon": "apple",
            "url": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-mac-arm64.dmg",
        }),
        "mac_x86_64_dmg": create_download_info_dict({
            "name": "Mac",
            "type": "Intel",
            "arch": "x86_64",
            "icon": "apple",
            "url": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-mac-x86_64.dmg",
        }),
        "linux_x86_64_appimage": create_download_info_dict({
            "name": "Linux",
            "type": "AppImage",
            "arch": "x86_64",
            "icon": "linux",
            "url": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-linux-x86_64.AppImage",
        }),
        "linux_x86_64_deb": create_download_info_dict({
            "name": "Linux",
            "type": "deb",
            "arch": "x86_64",
            "icon": "linux",
            "url": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-linux-x86_64.deb",
        }),
        "linux_x86_64_rpm": create_download_info_dict({
            "name": "Linux",
            "type": "rpm",
            "arch": "x86_64",
            "icon": "linux",
            "url": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-linux-x86_64.rpm",
        }),
        "linux_x86_64_targz": create_download_info_dict({
            "name": "Linux",
            "type": "tar.gz",
            "arch": "x86_64",
            "icon": "linux",
            "url": "https://github.com/ungive/discord-music-presence/releases/download/v2.3.5/musicpresence-2.3.5-linux-x86_64.tar.gz",
        }),
    }
