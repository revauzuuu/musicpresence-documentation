---
title: Installation
icon: lucide/download
---

# Installing Music Presence

Click one of the buttons below to download Music Presence for your operating system.

Make sure you read [Usage](#usage) and [Next steps](#next-steps) after installation.

<h2 id="download" class="download-heading">
    <span>Download</span>
    <a href="{{ musicpresence_github_repository }}" target="_blank"><img src="https://img.shields.io/github/stars/ungive/discord-music-presence?style=flat&label=GitHub%20Stars&logo=github&logoColor=white&labelColor=4a442f&color=be8c20&cacheSeconds=3600" /></a>
    <a href="{{ musicpresence_github_repository }}/releases" target="_blank"><img src="https://img.shields.io/github/downloads/ungive/discord-music-presence/total?style=flat&label=Downloads&logo=hack-the-box&logoColor=white&labelColor=444&color=ddd&cacheSeconds=600" /></a>
</h2>

{% include "download-buttons.html" %}

!!! quote ""
    You can also install the app via a [package manager](#package-managers).

## Installation

If you are unsure which file to download or what to do with it, read the following installation instructions. Select your operating system by clicking the respective tab.

=== ":fontawesome-brands-windows: &ensp; Windows"

    For most people [**Windows Installer x64**]({{ download_urls.win_x64_installer }}) is the right choice.
    
    1. Double-click the downloaded file and navigate through the installation steps
    2. Music Presence should automatically launch at the end of the installation process

    If it does not work or you get stuck, read about [common issues](#common-issues) below.

    The installer automatically adds **Music Presence** to your start menu for easy access.
    
    Alternatively, you can download the ZIP archive [**Windows zip x64**]({{ download_urls.win_x64_zip }}) instead. To run it, right-click and extract it, then double click the **Music Presence** or **Music Presence.exe** file in the extracted folder. Note that the ZIP is [not fully standalone](../faq.md#is-the-windows-zip-fully-standalone) and there won't be any entry in the start menu like with the installer.

=== ":fontawesome-brands-apple: &ensp; Mac"

    If you are unsure which download is the right one, click on the :fontawesome-brands-apple: Apple logo in the top-left corner of your screen and select "**About This Mac**".

    In case it says **M1**, **M2** or similar under "Chip" or anywhere else in the window that opened, then you need to choose the [**Mac Apple Silicon**]({{ download_urls.mac_arm64_dmg }}) download.

    If it says **Intel** under "Processor", then you have an older Intel Mac and you need to choose the [**Mac Intel x86_64**]({{ download_urls.mac_x86_64_dmg }}) download instead.

    To install the app:

    1. Double-click the downloaded DMG file. A new window should open
    2. Drag the Music Presence app into the Applications folder. Do not double-click the app just yet, as it wouldn't be properly installed then
    3. Close the window, then open :custom-mac-finder: Finder and open the :custom-mac-applications: Applications folder. Look for **Music Presence** and double-click the app to launch it

=== ":custom-linux: &ensp; Linux"

    !!! warning "TODO"

## Usage

After opening the app, right-click the <nobr>:custom-musicpresence: Music Presence</nobr> icon in your <span class="os-dependent-text" data-windows="tray menu" data-mac="menu bar" data-linux="system tray">tray menu</span> to access quick controls, to check the current status of the app and to open the settings.

!!! info "Can't find it?"

    Read [The app did not launch](#the-app-did-not-launch) in the [Common issues](#common-issues) section below.

## Next steps

After installing the app for the first time, you might want to read the following help articles:

- Read [**Discord Settings**](./discord-settings.md){ data-preview } for important Discord settings you need to enable
- Read [**Media Player Setup**](./media-player-setup.md){ data-preview } if your media player is not detected by Music Presence
- Read [**Discord Presence**](../discord-presence/intro.md){ data-preview } for an introduction into all Discord-related app features
- Read [**Scrobbling**](../scrobbling/intro.md){ data-preview } for information on when Scrobbling will be released

## Package managers

=== ":custom-homebrew: &ensp; Homebrew"
    
    !!! warning "TODO"

=== ":fontawesome-brands-arch-linux: &ensp; AUR"
    
    !!! warning "TODO"

## Automatic updates

!!! warning "TODO"

## Autostart

!!! warning "TODO"

## Common issues

### The app did not launch

!!! warning "TODO"
    Move this into [App Interaction](./interaction.md).

If it seems like the app did not launch or you can't see the app icon in the <span class="os-dependent-text" data-windows="tray menu" data-mac="menu bar" data-linux="system tray">tray menu</span>, this can have several reasons depending on the operating system you are using.

=== ":fontawesome-brands-windows: &ensp; Windows"

    The <nobr>:custom-musicpresence: Music Presence</nobr> icon may be hidden in your tray's overflow menu. To find it, you just need to click the <nobr>triangular :lucide-chevron-up: symbol</nobr> in the tray menu. If you want it to be visible at all times, you can simply drag the Music Presence icon into the tray.

    !!! info "Bug with special letters in the username"
        If you have special letters in your username, like `ã` or Cyrillic letters, there is currently a bug that causes the app to quit immediately when it's started: https://github.com/ungive/discord-music-presence/issues/716. Right now the only solution is to change your Windows username or run Music Presence under a different user account with a name that does not contain these letters.

=== ":fontawesome-brands-apple: &ensp; Mac"

    !!! warning "TODO"
        - The icon may be hidden under your display's notch
        - There may be too many icons in your menu bar that push the Music Presence icon out of view

=== ":custom-linux: &ensp; Linux"

    !!! warning "TODO"

!!! warning "TODO"

    If the app still did not launch...

    - Link to the "Community" tab to join the Discord community

### Windows protected your PC

If you get a pop-up with the title "Windows protected your PC", then this is because Windows does not recognize the developer of the app, not because the app is malicious.

Simply click on "**More info**" and then on "**Run anyway**".

### The application is flagged by antivirus

If the downloaded [**Windows Installer x64**]({{ download_urls.win_x64_installer }}) file is flagged by your antivirus, then this most likely a false-positive related to NSIS installers, see <a href="https://nsis.sourceforge.io/NSIS_False_Positives" target="_blank">NSIS False Positives</a>.

To be sure, you can always download the ZIP archive [**Windows zip x64**]({{ download_urls.win_x64_zip }}) instead. It only contains the Music Presence application and no NSIS Installer and it should have a clean scan result with most, if not all, antivirus software.

### Launching the Windows installer from the Firefox downloads

On some Windows devices the app may fail to launch or experience subtle issues, if you launched the Windows installer directly from the Downloads section in Firefox. I recommend that you open the Windows Explorer first and then run the installer from there.

## Getting help

!!! warning "TODO"

    - Link to the "Community" tab to join the Discord community

<script src="/_static/scripts/get-os.js"></script>
<script src="/_static/scripts/installation/reorder-download-buttons.js"></script>
<script src="/_static/scripts/installation/select-and-sync-os.js"></script>
