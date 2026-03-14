-- 叫醒服务播放脚本（修复版）

-- 日志函数
on logMsg(msg)
    do shell script "echo " & quoted form of ("[$(date '+%Y-%m-%d %H:%M:%S')] " & msg) & " >> ~/wakeup_music.log"
end logMsg

-- 查找歌曲
on findTrack(trackName)
    tell application "Music"
        try
            set theTrack to first track whose name contains trackName
            return theTrack
        on error
            return missing value
        end try
    end tell
end findTrack

-- 查找专辑（简化：只取第一个匹配）
on findAlbum(albumName)
    tell application "Music"
        try
            set theAlbum to first album whose name contains albumName
            return theAlbum
        on error
            return missing value
        end try
    end tell
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

    delay 10 -- 测试用短延迟

    -- 播放专辑《记忆中的粤语经典》
    set theAlbum to my findAlbum("记忆中的粤语经典")
    if theAlbum is not missing value then
        play theAlbum
        my logMsg("✅ 开始播放专辑")
    else
        my logMsg("❌ 未找到专辑")
    end if
end tell

my logMsg("✅ 测试完成")
