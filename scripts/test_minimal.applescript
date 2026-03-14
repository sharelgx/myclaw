-- 叫醒服务播放脚本（简化版）

-- 日志函数
on logMsg(msg)
    do shell script "echo " & quoted form of ("[$(date '+%Y-%m-%d %H:%M:%S')] " & msg) & " >> ~/wakeup_music.log"
end logMsg

-- 查找歌曲（遍历所有曲目）
on findTrack(trackName)
    tell application "Music"
        set allTracks to every track
        repeat with t in allTracks
            if name of t contains trackName then
                return t
            end if
        end repeat
    end tell
    return missing value
end findTrack

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
end tell

my logMsg("✅ 测试完成")
