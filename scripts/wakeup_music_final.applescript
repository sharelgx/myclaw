-- 叫醒服务播放脚本（最终版，带回退）

-- 日志函数
on logMsg(msg)
    do shell script "echo " & quoted form of ("[$(date '+%Y-%m-%d %H:%M:%S')] " & msg) & " >> ~/wakeup_music.log"
end logMsg

-- 查找歌曲（通过遍历）
on findTrack(trackName)
    tell application "Music"
        try
            set allTracks to every track
            repeat with t in allTracks
                if name of t contains trackName then
                    return t
                end if
            end repeat
        end try
    end tell
    return missing value
end findTrack

-- 查找专辑（通过 track 的 album 属性）
on findAlbum(albumName)
    tell application "Music"
        try
            set allTracks to every track
            repeat with t in allTracks
                set a to album of t
                if a is not missing value then
                    if name of a contains albumName then
                        return a
                    end if
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

    -- 步骤1：播放《千千阙歌》
    set theTrack to my findTrack("千千阙歌")
    if theTrack is not missing value then
        play theTrack
        my logMsg("✅ 开始播放《千千阙歌》")
    else
        -- 回退：播放"最爱"列表
        try
            set favPlaylist to playlist "最爱"
            if favPlaylist is not missing value then
                play favPlaylist
                my logMsg("⚠️ 未找到《千千阙歌》，改播'最爱'列表")
            else
                -- 再回退：随机播放所有歌曲
                play (some track)
                my logMsg("⚠️ 无'最爱'列表，随机播放一首")
            end if
        on error
            play (some track)
            my logMsg("⚠️ 无可用列表，随机播放")
        end try
    end if

    delay 300 -- 等待 5 分钟

    -- 步骤2：播放专辑《记忆中的粤语经典》
    set theAlbum to my findAlbum("记忆中的粤语经典")
    if theAlbum is not missing value then
        play theAlbum
        my logMsg("✅ 开始播放专辑《记忆中的粤语经典》")
    else
        -- 回退：继续播放当前列表或随机
        try
            if player state is playing then
                -- 已在播放，什么也不做
                my logMsg("⚠️ 未找到专辑，继续当前播放")
            else
                play (some track)
                my logMsg("⚠️ 未找到专辑，随机播放")
            end if
        on error
            my logMsg("⚠️ 无法播放专辑")
        end try
    end if
end tell

my logMsg("✅ 叫醒服务执行完成")
