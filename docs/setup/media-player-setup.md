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
mark:not([data-md-highlight]) {
    border-radius: 1em;
    padding: 1pt 4pt;
    margin-right: .25em;
    margin-left: -.25em;
}
[data-md-color-scheme="slate"] mark:not([data-md-highlight]) {
    background-color: #323232 !important;
    color: #bbb;
}
[data-md-color-scheme="default"] mark:not([data-md-highlight]) {
    background-color: #eaeaea !important;
    color: #444;
    font-weight: 500;
}
</style>

This guide covers how to set up Music Presence with your media player.

## Minimum requirements

For Music Presence to detect media playback, other applications must report information about what media they are playing to your operating system. You can see whether other applications do this, by checking the [media control interface](#media-control-interfaces) of your device.

If the media does not show up, refer to the [next section](#media-player-configuration). Make sure you are playing something, paused media may not always appear.

???+ info "Media control interfaces per operating system"

    <h2 id="media-control-interfaces" class="anchor-target" style="transform: translateY(-2em);">Media control interfaces</h2>

    === ":fontawesome-brands-windows:&ensp;Windows"

        ==Windows 11== Click on the section on the right of your task bar that is highlighted in the screenshot to see whether the media source reports what it is playing.
        
        ![Windows 11 media controls](/_static/media/media-controls-win-win11-dark.png#only-dark)
        ![Windows 11 media controls](/_static/media/media-controls-win-win11-light.png#only-light)

        ==Windows 10== Press a media key on your keyboard to see the information overlay.

        ![Windows 10 media overlay](/_static/media/media-controls-win-win10-dark.png#only-dark)
        ![Windows 10 media overlay](/_static/media/media-controls-win-win10-light.png#only-light)

    === ":fontawesome-brands-apple:&ensp;Mac"

        Click on the icon in the menu bar that is shown in the screenshot to see whether the media source reports what it is playing.

        ![macOS media controls](/_static/media/media-controls-mac-dark.png#only-dark)
        ![macOS media controls](/_static/media/media-controls-mac-light.png#only-light)

    === ":custom-linux:&ensp;Linux"

        !!! warning "TODO"

## Media player configuration

Depending on the media player you are using, you may need to install a plugin, run a helper program or enable a specific setting. Refer to the table below for an overview.

If the media still does not show up after following the instructions for your media player, support for it may not have been added yet. Refer to the [next section](#adding-support-for-a-media-player) for more information.

???+ info "Additional configuration per media player"
    
    | Player || Instructions |
    |:-:|-|-|
    | ![](https://live.musicpresence.app/v3/icons/aimp/logo-128.png){ width="23" } | AIMP | Install the [`Windows Media Control`](https://www.aimp.ru/forum/index.php?topic=63341){ target="_blank" } plugin. |
    | ![](https://live.musicpresence.app/v3/icons/feishin/logo-128.png){ width="23" } | Feishin | Switch to the web backend, then go to `Settings` -> `Hotkeys` and enable `Media Session`. Note that Music Presence can only identify Feishin as mpv, when you use the mpv backend. |
    | ![](https://live.musicpresence.app/v3/icons/foobar2000/logo-128.png){ width="23" } | foobar2000 | ==Windows== Install the [`foo_mediacontrol`](https://github.com/ungive/foo_mediacontrol){ target="_blank" } plugin. Click [Releases](https://github.com/ungive/foo_mediacontrol/releases/latest){ target="_blank" } to find all downloads. Alternatively you can also enable `Windows Universal Volume Control` under advanced preferences, but foobar2000 will not report the album name or the track duration then. |
    | ![](https://live.musicpresence.app/v3/icons/itunes/logo-128.png){ width="23" } | iTunes | ==Windows== You need to run the [iTunes-SMTC](https://github.com/thewizrd/iTunes-SMTC){ target="_blank" } helper program alongside Music Presence. You can download it from the [Releases](https://github.com/thewizrd/iTunes-SMTC/releases/latest){ target="_blank" } or the <nobr>[Windows Store](https://apps.microsoft.com/detail/9nq3d21qt8ml){ target="_blank" }</nobr>.<br style="margin-bottom:.4em;">==Mac== iTunes is not supported on Mac. Use Apple Music instead. |
    | ![](https://live.musicpresence.app/v3/icons/mpc-hc/logo-128.png){ width="23" } | MPC-HC | Under `Player` -> `User Interface` -> `Windows Integration` enable `Control via Windows UI (SMTC)`. If you don't have this setting, make sure to use this updated fork of MPC-HC: <nobr>[clsid2/mpc-hc](https://github.com/clsid2/mpc-hc){ target="_blank" }</nobr>. |
    | ![](https://live.musicpresence.app/v3/icons/mpv/logo-128.png){ width="23" } | mpv | ==Windows== mpv must either be run with the `--media-controls=yes` command line flag or by setting `media-controls=yes` in `mpv.conf`.<br style="margin-bottom:.4em;">==Mac== You must install and run mpv using an `.app` bundle. mpv cannot be detected when run from the command line. |
    | ![](https://live.musicpresence.app/v3/icons/musicbee/logo-128.png){ width="23" } | MusicBee | ==Windows== Install the [`mb_MediaControl`](https://github.com/HenryPDT/mb_MediaControl){ target="_blank" } plugin. Click [Releases](https://github.com/HenryPDT/mb_MediaControl/releases/latest){ target="_blank" } to find all downloads. After importing it into MusicBee, make sure the information window shows version 1.0.4 or newer.<br style="margin-bottom:.4em;">==Linux== If you run MusicBee under Wine, use [`mprisbee-bridge`](https://github.com/Kyletsit/mprisbee-bridge){ target="_blank" }. |
    | ![](https://live.musicpresence.app/v3/icons/qobuz/logo-128.png){ width="23" } | Qobuz | ==Windows== Qobuz does not report what it is playing anymore since a past update. You can try [downgrading](https://github.com/ungive/discord-music-presence/issues/244#issuecomment-3556269025){ target="_blank" } or [patching](https://github.com/TubaApollo/qobuz-smtc){ target="_blank" } Qobuz (this may violate Qobuz ToS, use at your own risk). <br style="margin-bottom:.4em;">==Mac== Qobuz does not report what it is playing on Mac. |
    | ![](https://live.musicpresence.app/v3/icons/vlc/logo-128.png){ width="23" } | VLC |  ==Windows== Install the [`vlc-win10smtc`](https://github.com/spmn/vlc-win10smtc){ target="_blank" } plugin. |
    | ![](https://live.musicpresence.app/v3/icons/winamp/logo-128.png){ width="23" } | Winamp | Install the [`gen_smtc`](https://github.com/NanMetal/gen_smtc){ target="_blank" } plugin. |
    | ![](https://live.musicpresence.app/v3/icons/windows-media-player-legacy/logo-128.png){ width="23" } | Windows Media Player Legacy | [Windows-Media-Player-Discord-RPC](https://github.com/T0biasCZe/Windows-Media-Player-Discord-RPC){ target="_blank" } is a 2-in-1 program that allows Windows Media Player to be detected by Music Presence while it's running and also provides its own Discord RPC implementation. |

*[ToS]: Terms of Service

## Adding support for a media player

!!! warning "TODO"

## Multimedia players

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
