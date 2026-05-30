---
title: Album Covers
icon: lucide/images
hide:
    - toc
    - tags
tags:
    - Discord Presence
---

!!! warning "TODO"
    Introduce how album covers are uploaded.

    Contribution guide: https://github.com/music-presence/documentation#contributing

    Show the table of contents, if it's helpful.

!!! note "Content notes"
    - Mention that album covers are uploaded from the media player
    - Mention that album covers need to appear in the media control overlay
    - Mention that for local files, album covers must be in the metadata of the music file
    - Mention common issues, like the current IPv6 issue, link to the troubleshooting section
    - Show the settings in the app that are relevant to this
    - Mention that with uploading the album cover it is always guaranteed that the correct album cover is shown. Using a music API does not guarantee this

!!! note "Content notes (animated album covers)"
    - Animated album covers are disabled by default
    - Animated album covers are only supported for Apple Music and TIDAL
    - Animated album covers do not work with third-party media players that have their own brand name, e.g. Cider, as the API is not used with those players. Link to the GitHub issue that mentions this
    - Video conversion servers are hosted by community members. If you'd like to contribute one of your servers, please contact me (name e-mail address). Also link to the source code repository of the server and mention that it's dockerized and easy to set up
    - Hint the user that animated album covers are an experimental feature and it might not always work
