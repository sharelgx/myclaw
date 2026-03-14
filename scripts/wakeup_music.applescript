-- 叫醒服务播放脚本
-- 5:30 自动播放：先播放《千千阙歌》，然后继续播放专辑《记忆中的粤语经典》

-- 日志函数
on logMsg(msg)
    do shell script "echo " & quoted form of ("[$(date '+%Y-%m-%d %H:%M:%S')] " & msg) & " >> ~/wakeup_music.log"
end logMsg

-- 查找歌曲
on findTrack(trackName)
    tell application "Music"
        try
            set lib to library playlist 1
            set allTracks to every track of lib
            repeat with t in allTracks
                if name of t contains trackName then
                    return t
                end if
            end repeat
        end try
    end tell
    return missing value
end findTrack

-- 查找专辑
on findAlbum(albumName)
    tell application "Music"
        try
            set allAlbums to every album
            repeat with a in allAlbums
                if name of a contains albumName then
                    return a
                end if
            end repeat
        end try
    end tell
    return missing value
end findAlbum

-- 主程序
tell application "Music"
    activate
    delay 2
    set sound volume to 60

    -- 播放《千千阙歌》
    set theTrack to my findTrack("千千阙歌")
    if theTrack is not missing value then
        play theTrack
        my logMsg("✅ 开始播放《千千阙歌》")
    else
        my logMsg("❌ 未找到《千千阙歌》")
    end if

    delay 300 -- 等待 5 分钟

    -- 播放专辑《记忆中的粤语经典》
    set theAlbum to my findAlbum("记忆中的粤语经典")
    if theAlbum is not missing value then
        play theAlbum
        my logMsg("✅ 开始播放专辑《记忆中的粤语经典》")
    else
        my logMsg("❌ 未找到专辑《记忆中的粤语经典》")
    end if
end tell

my logMsg("✅ 叫醒服务执行完成")
