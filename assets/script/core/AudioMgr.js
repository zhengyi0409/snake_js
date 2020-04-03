/**
 * 音乐管理类
 */
'use strict';

window.AudioMgr = {

    path: 'audio/',

    audio: [],

    isPlayMusic: true,

    /**
     * 初始化所有音频（视项目而定）
     */
    init: function init() {},

    /**
     * 加载音频
     *
     * @param {String} url 音频名
     */
    load: function load(url) {
        var audioPath = AudioMgr.path + url;
        cc.loader.loadRes(audioPath + '.mp3', function (err, audio) {
            if (err) {
                cc.error(err.message || err);
            } else {
                AudioMgr.audio[audioPath] = audio;
            }
        });
    },

    /**
     * 播放背景音效（默认循环）
     *
     * @param {String} url 音乐名
     */
    playMusic: function playMusic(url) {
        var audio = AudioMgr.audio[AudioMgr.path + url]
        if (audio) {
            if(LocalManager.getBool("musicToggle")){
                cc.audioEngine.playMusic(audio, true)
            }
        }
    },

    /**
     * 暂停播放背景音乐
     */
    pauseMusic: function pauseMusic() {
        cc.audioEngine.pauseMusic();
    },

    /**
     * 恢复播放背景音乐
     */
    resumeMusic: function resumeMusic() {
        if (AudioMgr.isPlayMusic) {
            cc.audioEngine.resumeMusic();
            AudioMgr.isPlayMusic = true;
        }
    },

    /**
     * 停止播放背景音乐
     */
    stopMusic: function stopMusic() {
        AudioMgr.isPlayMusic = false;
        cc.audioEngine.stopMusic();
    },

    /**
     * 播放背景音效
     *
     * @param {String} url 音效名
     * @param {Bool} loop 是否循环
     *
     * @return {Number} 音效ID
     */
    playEffect: function playEffect(url, loop) {
        var audio = AudioMgr.audio[AudioMgr.path + url];
        loop = loop || false;
        if (audio) {
            if(LocalManager.getBool("soundToggle")){
                cc.audioEngine.playEffect(audio, loop)
            }
        }
    },

    /**
     * 停止播放指定音效
     *
     * @param {Number} audioID 音效ID
     */
    stopEffect: function stopEffect(audioID) {
        cc.audioEngine.stopEffect(audioID);
    },

    /**
     * 停止正在播放的所有音效
     */
    stopAllEffects: function stopAllEffects() {
        cc.audioEngine.stopAllEffects();
    }
};