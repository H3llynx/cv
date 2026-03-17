<script setup>
import { computed, getCurrentInstance } from 'vue';
import { useTheme } from '../assets/themeChecker';

const { theme } = useTheme()

const themeLight = computed(() => theme.value === 'light')

const props = defineProps({
    progress: { type: Number, required: true },
    size: { type: Number, default: 70 },
    stroke: { type: Number, default: 8 },
    iconName: { type: String, required: true },
    label: { type: String, required: true }
});

const radius = computed(() => (props.size - props.stroke) / 2);
const center = computed(() => props.size / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const dashOffset = computed(
    () => circumference.value - (props.progress / 100) * circumference.value
);

const instance = getCurrentInstance();
const gradientId = `grad-${instance.uid}`;
</script>

<template>
    <div class="progress-circle" :aria-label="`${label} skill at ${progress}%`" role="img">
        <svg :width="size" :height="size" class="circular-progress">
            <defs>
                <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"
                        :stop-color="themeLight ? 'var(--gradient-stop1-light)' : 'var(--gradient-stop1-dark)'" />
                    <stop offset="50%"
                        :stop-color="themeLight ? 'var(--gradient-stop2-light)' : 'var(--gradient-stop2-dark)'" />
                    <stop offset="100%"
                        :stop-color="themeLight ? 'var(--gradient-stop3-light)' : 'var(--gradient-stop3-dark)'" />
                </linearGradient>
            </defs>

            <!-- Background -->
            <circle :cx="center" :cy="center" :r="radius"
                :stroke="themeLight ? 'var(--bg-svg-light)' : 'var(--bg-svg-dark)'" :stroke-width="stroke"
                fill="none" />

            <!-- Progress -->
            <circle :cx="center" :cy="center" :r="radius" :stroke="`url(#${gradientId})`" :stroke-width="stroke"
                fill="none" stroke-linecap="round" :stroke-dasharray="circumference" :stroke-dashoffset="dashOffset"
                :transform="`rotate(-90 ${center} ${center})`" />
        </svg>

        <div class="progress-label">
            <ion-icon :name="iconName" aria-hidden="true"></ion-icon>
            <div class="ts-container" v-if="iconName === 'typescript'"><svg aria-hidden width="24px" height="24px"
                    viewBox="0 0 100% 100%" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
                </svg>
            </div>
        </div>
    </div>
</template>


<style scoped>
.progress-circle {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    z-index: 0;
}

.circular-progress {
    transform: rotate(0deg);
}

.progress-label {
    position: absolute;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    justify-content: flex-start;
}

.ts-container {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
}
</style>
