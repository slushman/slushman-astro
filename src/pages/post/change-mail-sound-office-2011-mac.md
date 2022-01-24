---
layout: layout:Post
title: "How to Change the New Mail Sound in Office 2011 for Mac"
date: "2010-10-28"
category: ["IT"]
heroAccount: 'ugmonk'
heroPhotographer: 'Jeff Sheldon'
description: "I really wanted to change the default 'new mail' sound in Outlook 2011 to a clip from Monty Python. This is how I made it work."
slug: change-mail-sound-office-2011-mac
---

![Outlook 2011 Icon](/post/change-mail-sound-office-2011-mac/outlook2011icon.jpg) I just got Office for Mac 2011 yesterday and I've been putting it through its paces. The new "Ribbon" doesn't seem intuitive yet, but that may just take time. Two things that I'd like to see improved:

1. There's no way to create an automatic archive for back-ups like on the PC Outlook.
2. There's no easy way to change the sound alerts.

This second one began to bother me today. Several years ago I started changing my new mail alert to a recording from Monty Python's Holy Grail. An arrow hits Sir Lancelot's trusty servant Concorde and he says "Message for you, sir!" I wanted to change that setting in Office for Mac 2011, but the alert options only has a checkbox - the alert is either on or off. After some googling and digging, here's how to customize your alerts sounds for Office for Mac 2011:

Close Outlook

Open your hard drive and go to Applications > Microsoft Office 2011 > Office

![show-package-contents](/post/change-mail-sound-office-2011-mac/show-package-contents.png)

Right-click (or control+click) on OutlookCore.framework and select Show Package Contents

![resources-wavs](/post/change-mail-sound-office-2011-mac/resources-wavs1.png)

Inside the Resources folder are the wav files for the alerts sounds.  To change the "new mail" sound, we want to replace the newmail.wav file by renaming the new alert to the same name and copying it into this folder.  Select to replace the file when asked.

Open Outlook

Now, when you get a new message, it will play your new message wav instead of the default one.  It would be nice if there was a way to do this without digging through framework files, but until then, this will work for you!
