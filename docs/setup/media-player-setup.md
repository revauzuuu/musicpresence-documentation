---
title: Media Player Setup
icon: lucide/music
hide:
    - tags
tags:
    - Setup
---

<style>
[data-md-color-scheme="slate"] img[src*="/_static/media/media-controls-"] {
    border-radius: 1em;
    border: 1px solid #222;
}
[data-md-color-scheme="default"] img[src*="/_static/media/media-controls-"] {
    border-radius: 1em;
    border: 1px solid #ccc;
}
th:nth-child(1) {
    min-width: 0 !important;
}
th:nth-child(2), td:nth-child(2), th:nth-child(3), td:nth-child(3) {
    padding-left: 0 !important;
}
table {
    border-radius: 1em !important;
}
mark.pill:not([data-md-highlight]) {
    border-radius: 1em;
    padding: 1pt 6pt;
    margin-right: .25em;
    margin-left: -.25em;
}
[data-md-color-scheme="slate"] mark.pill:not([data-md-highlight]) {
    background-color: #323232 !important;
    color: #bbb;
}
[data-md-color-scheme="default"] mark.pill:not([data-md-highlight]) {
    background-color: #eaeaea !important;
    color: #444;
    font-weight: 500;
}
.tabbed-set-table-next {
    display: none;
}
.tabbed-set-table-next + .tabbed-set .tabbed-content {
    padding: 0;
}
.tabbed-set-table-next + .tabbed-set .tabbed-content .md-typeset__scrollwrap {
    margin: 0;
}
.tabbed-set-table-next + .tabbed-set .tabbed-content .md-typeset__table {
    padding: 0;
    margin-top: .25em;
    border-top: 0;
    margin-bottom: 0;
}
.tabbed-set-table-next + .tabbed-set table {
    border: 0;
    border-radius: 0 !important;
}
.tabbed-set-table-next + .tabbed-set table thead {
    display: none;
}
.tabbed-set-table-next + .tabbed-set table {
    background-color: transparent;
}
.tabbed-set-table-next + .tabbed-set table tbody tr:hover {
    background-color: transparent;
    box-shadow: none;
}
.tabbed-set-table-next + .tabbed-set table tbody tr:nth-of-type(1) td {
    border-top: 0;
}
img[src*="/logo-128.png"] {
    min-width: 23px;
    width: 23px;
}
</style>

This guide covers how to set up Music Presence with your media player.

## Minimum requirements

For Music Presence to detect media playback, other applications must report information about what media they are playing to your operating system. You can see if other applications do this, by checking the [media control interface](#media-control-interfaces) of your device.

If the media does not show up, refer to the [next section](#media-player-configuration). Make sure you are playing something, paused media may not always appear.

<h2 id="media-control-interfaces" class="anchor-target" style="transform: translateY(-2em);">Media control interfaces</h2>

=== ":fontawesome-brands-windows:&ensp;Windows"

    ==Windows 11=={ .pill } Click on the section on the right of your task bar that is highlighted in the screenshot to see whether an application reports what it is playing.
    
    ![Windows 11 media controls](/_static/media/media-controls-win-win11-dark.png#only-dark)
    ![Windows 11 media controls](/_static/media/media-controls-win-win11-light.png#only-light)

    ==Windows 10=={ .pill } Press a media key on your keyboard to see the information overlay.

    ![Windows 10 media overlay](/_static/media/media-controls-win-win10-dark.png#only-dark)
    ![Windows 10 media overlay](/_static/media/media-controls-win-win10-light.png#only-light)

=== ":fontawesome-brands-apple:&ensp;Mac"

    Click on the icon in the menu bar that is shown in the screenshot to see whether an application reports what it is playing.

    ![macOS media controls](/_static/media/media-controls-mac-dark.png#only-dark)
    ![macOS media controls](/_static/media/media-controls-mac-light.png#only-light)

=== ":custom-linux:&ensp;Linux"

    !!! warning "TODO"

## Media player configuration

Depending on the media player you are using, you may need to install a plugin, run a helper program or enable a specific setting. Refer to the table below for instructions.

Make sure to select the correct operating system by clicking on the respective tab.

<div class="tabbed-set-table-next"></div>

=== ":fontawesome-brands-windows:&ensp;Windows"

    | Player || Instructions |
    |:-:|-|-|
    | ![](https://live.musicpresence.app/v3/icons/aimp/logo-128.png) | AIMP | Install the [`Windows Media Control`](https://www.aimp.ru/forum/index.php?topic=63341){ target="_blank" } plugin. |
    | ![](https://live.musicpresence.app/v3/icons/feishin/logo-128.png) | Feishin | Switch to the web backend, then go to `Settings` -> `Hotkeys` and enable `Media Session`. Note that Music Presence can only identify Feishin as mpv, when you use the mpv backend. |
    | ![](https://live.musicpresence.app/v3/icons/foobar2000/logo-128.png) | foobar2000 | Install the [`foo_mediacontrol`](https://github.com/ungive/foo_mediacontrol){ target="_blank" } plugin. Click [Releases](https://github.com/ungive/foo_mediacontrol/releases/latest){ target="_blank" } to find all downloads. Alternatively you can also enable `Windows Universal Volume Control` under advanced preferences, but foobar2000 will not report the album name or the track duration then. |
    | ![](https://live.musicpresence.app/v3/icons/itunes/logo-128.png) | iTunes | You need to run the [`iTunes-SMTC`](https://github.com/thewizrd/iTunes-SMTC){ target="_blank" } helper program alongside Music Presence. You can download it from the [Releases](https://github.com/thewizrd/iTunes-SMTC/releases/latest){ target="_blank" } or the <nobr>[Windows Store](https://apps.microsoft.com/detail/9nq3d21qt8ml){ target="_blank" } |
    | ![](https://live.musicpresence.app/v3/icons/mpc-hc/logo-128.png) | MPC-HC | Under `Player` -> `User Interface` -> `Windows Integration` enable `Control via Windows UI (SMTC)`. If you don't have this setting, make sure to use this updated fork of MPC-HC: <nobr>[clsid2/mpc-hc](https://github.com/clsid2/mpc-hc){ target="_blank" }</nobr>. |
    | ![](https://live.musicpresence.app/v3/icons/mpv/logo-128.png) | mpv | mpv must either be run with the `--media-controls=yes` command line flag or by setting `media-controls=yes` in `mpv.conf`. |
    | ![](https://live.musicpresence.app/v3/icons/musicbee/logo-128.png) | MusicBee | Install the [`mb_MediaControl`](https://github.com/HenryPDT/mb_MediaControl){ target="_blank" } plugin. Click [Releases](https://github.com/HenryPDT/mb_MediaControl/releases/latest){ target="_blank" } to find all downloads. After importing it into MusicBee, make sure the information window shows version 1.0.4 or newer. |
    | ![](https://live.musicpresence.app/v3/icons/vlc/logo-128.png) | VLC |  Install the [`vlc-win10smtc`](https://github.com/spmn/vlc-win10smtc){ target="_blank" } plugin. |
    | ![](https://live.musicpresence.app/v3/icons/winamp/logo-128.png) | Winamp | Install the [`gen_smtc`](https://github.com/NanMetal/gen_smtc){ target="_blank" } plugin. |
    | ![](https://live.musicpresence.app/v3/icons/windows-media-player-legacy/logo-128.png) | Windows Media Player Legacy | [`Windows-Media-Player-Discord-RPC`](https://github.com/T0biasCZe/Windows-Media-Player-Discord-RPC){ target="_blank" } is a 2-in-1 program that allows Windows Media Player to be detected by Music Presence while it's running and also provides its own Discord RPC implementation. |

=== ":fontawesome-brands-apple:&ensp;Mac"

    | Player || Instructions |
    |:-:|-|-|
    | ![](https://live.musicpresence.app/v3/icons/itunes/logo-128.png) | iTunes | iTunes is not supported on Mac. Use Apple Music instead. |
    | ![](https://live.musicpresence.app/v3/icons/mpv/logo-128.png) | mpv | You must install and run mpv using an `.app` bundle. mpv cannot be detected when run as a plain binary from the command line. |

=== ":custom-linux:&ensp;Linux"

    | Player || Instructions |
    |:-:|-|-|
    | ![](https://live.musicpresence.app/v3/icons/musicbee/logo-128.png) | MusicBee | If you run MusicBee under Wine, install the [`mb_MPRISBee`](https://github.com/UrbanCMC/mb_MPRISBee){ target="_blank" } plugin. |

*[ToS]: Terms of Service

## Media players with known issues

Some media players are known to not report what they are playing or are known to report inaccurate information. If you use one of these players, consider [contacting the developer](#support-ticket-template) of that media player, so they can improve its integration with the system.

<div class="tabbed-set-table-next"></div>

=== ":fontawesome-brands-windows:&ensp;Windows"

    | Player || Instructions |
    |:-:|-|-|
    | ![](https://live.musicpresence.app/v3/icons/amazon-music/logo-128.png) | Amazon Music | Amazon Music does not report any album cover image and sometimes reports very inaccurate or scrambled song metadata. |
    | ![](https://live.musicpresence.app/v3/icons/qobuz/logo-128.png) | Qobuz | Qobuz does not report what it is playing anymore since a past update. You can try [downgrading](https://github.com/ungive/discord-music-presence/issues/244#issuecomment-3556269025){ target="_blank" } or [patching](https://github.com/TubaApollo/qobuz-smtc){ target="_blank" } it (this may violate Qobuz ToS, use at your own risk). |
    | ![](https://live.musicpresence.app/v3/icons/tidal/logo-128.png) | TIDAL | TIDAL does not report the album name of the playing song. If the [TIDAL API](../discord-presence/music-apis.md) is enabled, the album name can only be guessed and may sometimes be incorrect. |
    | ![](https://live.musicpresence.app/v3/icons/windows-media-player/logo-128.png) | Windows Media Player | Windows Media Player sometimes does not report any album cover image and tends to stop reporting what it is playing after playing a few songs. |

=== ":fontawesome-brands-apple:&ensp;Mac"

    | Player || Instructions |
    |:-:|-|-|
    | ![](https://live.musicpresence.app/v3/icons/qobuz/logo-128.png) | Qobuz | Qobuz does not report what it is playing on Mac. |

=== ":custom-linux:&ensp;Linux"

    ||
    |-|
    | *There are no media players with known issues on Linux.* |

## Multimedia and radio players

[Discord Presence](../discord-presence/intro.md) is disabled by default for multimedia players, radio players and any other players that may report personal information or details about your location. You have to enable these explicitly, read [Player Controls](../discord-presence/player-controls.md) to find out how.

## Adding support for a media player

!!! warning "TODO"

## Browser support

!!! warning "TODO"

## Debugging

!!! warning "TODO"

## Support ticket template

!!! warning "TODO"

## Information for developers

!!! warning "TODO"

---

!!! warning "TODO"
    Explain which media players need additional setup and which don't. Also explain that browser support is coming soon, but the browser extension that is needed can already be tested in terms of website compatibility.

    Contribution guide: https://github.com/music-presence/documentation#contributing

    Show the table of contents, if it's helpful.

!!! note "Content notes"
    - https://github.com/ungive/discord-music-presence/blob/master/documentation/supported-media-players.md#required-plugins-and-helper-programs
    - Mention plugins and helper programs
    - Mention that most players should work out of the box
    - Mention that some players need to be enabled explicitly for the Discord status
    - Mention that all players of interested have to be enabled explicitly for Scrobbling (add this once Scrobbling has released, not before)
    - Mention that browser support is coming soon (link to the corresponding page that mentions the browser extension)
    - Link to the supported players page
    - Explain how to add support for a media player (perhaps make a separate page for that?)
    - GitHub issue to subscribe to for e-mail notifications for browser support: https://github.com/ungive/discord-music-presence/issues/5
    - Firefox Add-on page: https://addons.mozilla.org/en-US/firefox/addon/media-control-extension/
    - Chrome Web Store page: TBD
    - Browser extension source code: https://github.com/ungive/media-control-extension/
    - Is there another way to show the Windows 10 media overlay than with media keys on the keyboard only?

<script type="module" src="/_static/scripts/page/select-and-sync-os.js"></script>
