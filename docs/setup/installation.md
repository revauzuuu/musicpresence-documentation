---
title: Installation
icon: lucide/download
hide:
    - tags
tags:
    - Setup
---

# Installing Music Presence

Click one of the buttons below to download Music Presence for your operating system.

Make sure you read about [usage](#usage) and the [next steps](#next-steps) after [installation](#installation).

## Download { .anchor-target aria-hidden="true" }

<h2 class="download-heading">
    <span>Download</span>
    <span class="download-links">
        <a href="{{ musicpresence_github_repository }}" target="_blank"><img src="https://img.shields.io/github/stars/ungive/discord-music-presence?style=flat&label=GitHub%20Stars&logo=github&logoColor=white&labelColor=4a442f&color=be8c20&cacheSeconds=3600" /></a>
        <a href="{{ musicpresence_github_repository }}/releases" target="_blank"><img src="https://img.shields.io/github/downloads/ungive/discord-music-presence/total?style=flat&label=Downloads&logo=hack-the-box&logoColor=white&labelColor=444&color=ddd&cacheSeconds=600" /></a>
    </span>
</h2>

{% include "download-buttons.html" %}

!!! quote ""
    You can also install the app via a [package manager](#package-managers).

## Installation

For installation instructions, select your operating system by clicking the respective tab.

=== ":fontawesome-brands-windows:&ensp;Windows"

    For most people {{ downloads.win_x64_installer.markdown.link }} is the right choice.
    
    1. Double-click the downloaded file and navigate through the installation steps
    2. Music Presence should automatically launch at the end of the installation process

    If it does not work or you get stuck, read about [common issues](#common-issues) below.

    The installer automatically adds **Music Presence** to your start menu for easy access.
    
    ---

    Alternatively, you can download the ZIP archive {{ downloads.win_x64_zip.markdown.link }} instead. To run it, right-click and extract it, then double-click the **Music Presence** or **Music Presence.exe** file in the extracted folder. Note that the ZIP is [not fully standalone](../faq.md#is-the-windows-zip-fully-standalone) and there won't be any entry in the start menu like with the installer.

=== ":fontawesome-brands-apple:&ensp;Mac"

    If you are unsure which download is the right one, click on the :fontawesome-brands-apple: **Apple logo** in the top-left corner of your screen and select "**About This Mac**".

    In case it says **M1**, **M2** or similar under "Chip" or anywhere else in the window that opened, then you need to choose the {{ downloads.mac_arm64_dmg.markdown.link }} download.

    If it says **Intel** under "Processor", then you have an older Intel Mac and you need to choose the {{ downloads.mac_x86_64_dmg.markdown.link }} download instead.

    To install the app:

    1. Double-click the downloaded DMG file. A new window should open
    2. Drag the Music Presence app into the Applications folder. Do **not** open Music Presence from this window, as it wouldn't be properly installed then
    3. Close the window, then open :custom-mac-finder: Finder and open the :custom-mac-applications: Applications folder. Look for **Music Presence** and double-click the app to launch it

    !!! quote ""

        If you use {{ blank_link("Homebrew", "https://brew.sh") }}, you can install the {{ package_link("homebrew") }} package. Instructions [below]({{ anchor_tab_url("#package-managers", "homebrew") }}).

=== ":custom-linux:&ensp;Linux"

    The easiest and safest way to download and run Music Presence for Linux universally is with the {{ downloads.linux_x86_64_appimage.markdown.link }} download. Mark the file as executable and run it:
    
    ```
    chmod +x ./{{ downloads.linux_x86_64_appimage.filename }}
    ./{{ downloads.linux_x86_64_appimage.filename }}
    ```

    ---

    For Ubuntu, Mint, Debian and other Debian-like Linux distributions, you can also download {{ downloads.linux_x86_64_deb.markdown.link }}. It only bundles the dependencies that are not provided by your Linux distribution and runs on your device natively. To install:

    ```
    sudo apt install ./{{ downloads.linux_x86_64_deb.filename }}
    ```

    Similarly, for Fedora, CentOS, OpenSUSE and similar RPM-based Linux distributions, you can download {{ downloads.linux_x86_64_rpm.markdown.link }} and install it using any of the following commands, depending on the distribution you are using:

    ```
    sudo dnf install ./{{ downloads.linux_x86_64_rpm.filename }}
    sudo zypper install ./{{ downloads.linux_x86_64_rpm.filename }}
    sudo rpm -i ./{{ downloads.linux_x86_64_rpm.filename }}
    ```

    ---

    !!! quote ""

        If you use Arch Linux, you can install the <u>unofficial</u> {{ package_link("aur") }} package. Make sure you trust the contents of the {{ blank_link("`PGKBUILD`", "https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=" ~ packages.aur.name) }} file before installing it. Instructions [below]({{ anchor_tab_url("#package-managers", "aur") }}).

## Usage

After installing and opening the app, right-click the <nobr>:custom-musicpresence: Music Presence</nobr> icon in your <span class="os-dependent-text" data-windows="tray menu" data-mac="menu bar" data-linux="system tray">tray menu</span> to access quick controls and the current state of the app and to open the settings.

!!! info "Can't find the icon?"

    Read [The app did not launch](#the-app-did-not-launch){ data-preview } in the [Common issues](#common-issues) section below.

## Next steps

After installing the app for the first time, you might want to read the following help articles:

- Read [**Discord Settings**](./discord-settings.md) for important Discord settings you need to enable
- Read [**Media Player Setup**](./media-player-setup.md) if your media player is not detected by Music Presence
- Read [**Discord Presence**](../discord-presence/intro.md) for an introduction into all Discord-related app features
- Read [**Scrobbling**](../scrobbling/intro.md) for information on when Scrobbling will be released

---

## Package managers

Music Presence is also available with some package managers. Using a package manager ensures that the app is always up-to-date.

=== ":custom-homebrew:&ensp;Homebrew"
    
    We maintain the {{ package_link("homebrew") }} package on {{ blank_link("Homebrew", "https://brew.sh") }} for Mac:

    ```
    brew install {{ packages.homebrew.name }}
    ```

=== ":fontawesome-brands-arch-linux:&ensp;AUR"
    
    You can install the <u>unofficial</u> AUR package {{ package_link("aur") }}:

    ```
    yay -S {{ packages.aur.name }}
    ```

    Make sure you trust the contents of the {{ blank_link("`PGKBUILD`", "https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=" ~ packages.aur.name) }} file before installing it, i.e. verify that the Music Presence download URL matches one of the download URLs from [above](#download).

## Common issues

### The app did not launch

If it seems like the app did not launch or you can't see the app icon in the <span class="os-dependent-text" data-windows="tray menu" data-mac="menu bar" data-linux="system tray">tray menu</span>, this can have several reasons depending on the operating system you are using.

=== ":fontawesome-brands-windows:&ensp;Windows"

    The <nobr>:custom-musicpresence: Music Presence</nobr> icon may be hidden in your tray's overflow menu. To find it, you just need to click the <nobr>triangular :lucide-chevron-up: symbol</nobr> in the tray menu. If you want it to be visible at all times, you can simply drag the Music Presence icon into the tray.

    !!! info "Bug with special letters in the username"
        If you have special letters in your username, like `ã` or Cyrillic letters, there is currently a bug that causes the app to quit immediately when it's started: https://github.com/ungive/discord-music-presence/issues/716. Right now the only solution is to change your Windows username or run Music Presence under a different user account with a name that does not contain these letters.

=== ":fontawesome-brands-apple:&ensp;Mac"

    !!! warning "TODO"
        - The icon may be hidden under your display's notch
        - There may be too many icons in your menu bar that push the Music Presence icon out of view

=== ":custom-linux:&ensp;Linux"

    !!! warning "TODO"

### Windows protected your PC

If you get a pop-up with the title "Windows protected your PC", then this is because Windows does not recognize the developer of the app, not because the app is malicious.

Simply click on "**More info**" and then on "**Run anyway**".

### The application is flagged by your antivirus

If the downloaded {{ downloads.win_x64_installer.markdown.link }} file is flagged by your antivirus, then this most likely a false-positive related to NSIS installers, see <a href="https://nsis.sourceforge.io/NSIS_False_Positives" target="_blank">NSIS False Positives</a>.

To be sure, you can always download the ZIP archive {{ downloads.win_x64_zip.markdown.link }} instead. It only contains the Music Presence application and no NSIS Installer and it should have a clean scan result with most, if not all, antivirus software.

### Launching the Windows installer from the Firefox downloads

On some Windows devices the app may fail to launch or experience subtle issues, if you launched the Windows installer directly from the downloads section in Firefox. To avoid any issues, it's best to open Windows Explorer first and then run the installer from there.

<script type="module" src="/_static/scripts/page/installation/reorder-download-buttons.js"></script>
<script type="module" src="/_static/scripts/page/select-and-sync-os.js"></script>

---

!!! warning "TODO"

    - Add screenshots of where to find the app icon
    - Add a section for "Automatic updates" of the application
    - Add a section for "Autostart" (automatic startup) of the application
    - Link to the "Community" tab to join the Discord community in the "The app did not launch" section, in case the app still did not launch for the user
    - Link to the "Community" tab to join the Discord community in a "Getting help" section
    - Write a version of "The app did not launch section" in "App interaction". Maybe use a Jinja template for this to avoid duplicate content
