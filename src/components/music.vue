<template>
    <div>
        <audio ref="music" loop>
            <source src="../assets/yd.mp3" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
import bus from "@/utils/bus"
export default {
    created() {
        bus.$on("music", msg => {
            let music_play=this.$refs.music
            wx.ready(function () {
                if (msg == 2) {
                   music_play.pause()
                } else {
                   music_play.play()
                }

            })
        })

    }
}
</script>

<style lang="scss" scoped>
</style>