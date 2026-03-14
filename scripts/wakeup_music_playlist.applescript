-- 叫醒服务播放脚本（播放列表版 - 最稳定）

-- 日志函数
on logMsg(msg)
    do shell script "echo " & quoted form of ("[$(date '+%Y-%m-%d %H:%M:%S')] " & msg) & " >> ~/wakeup_music.log"
end logMsg

tell application "Music"
    activate
    delay 2
    set sound volume to 60

    -- 播放"叫醒服务"列表
    try
        set wakeupList to playlist "叫醒服务"
        if wakeupList is not missing value then
            play wakeupList
            my logMsg("✅ 开始播放'叫醒服务'播放列表")
        else
            error "未找到播放列表'叫醒服务'"
        end if
    on error
        -- 回退：随机播放
        try
            play (some track)
            my logMsg("⚠️ 未找到播放列表，随机播放")
        on error
            my logMsg("❌ 无法播放任何内容")
        end try
    end try
end tell

my logMsg("✅ 叫醒服务执行完成")
