<template>
  <div>
    <div class="settings">
      <p class="settings__list-title">theme</p>
      <div class="settings__list-options column">
        <button
          class="settings__option"
          :class="{ actived: activedTheme === 'mordern-elegance' }"
          @click="setTheme('mordern-elegance')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
            <rect width="14" height="14" fill="#34495E" rx="2" />
          </svg>

          modern-elegance
        </button>

        <button
          class="settings__option"
          :class="{ actived: activedTheme === 'spring-freschness' }"
          @click="setTheme('spring-freschness')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
            <rect width="14" height="14" fill="#00796B" rx="2" />
          </svg>

          spring-freschness
        </button>

        <button
          class="settings__option"
          :class="{ actived: activedTheme === 'cozy-vibes' }"
          @click="setTheme('cozy-vibes')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
            <rect width="14" height="14" fill="#FFB74D" rx="2" />
          </svg>

          cozy-vibes
        </button>

        <button
          class="settings__option"
          :class="{ actived: activedTheme === 'minimalist-sophistication' }"
          @click="setTheme('minimalist-sophistication')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
            <rect width="14" height="14" fill="#757575" rx="2" />
          </svg>

          minimalist-sophistication
        </button>

        <button
          class="settings__option"
          :class="{ actived: activedTheme === 'vibrant-energy' }"
          @click="setTheme('vibrant-energy')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
            <rect width="14" height="14" fill="#E53935" rx="2" />
          </svg>

          vibrant-energy
        </button>
      </div>
    </div>

    <div class="settings">
      <p class="settings__list-title">type</p>
      <div class="settings__list-options row">
        <button
          class="settings__option"
          :class="{ actived: activedType === 'row' }"
          @click="setType('row')"
        >
          <svg width="23" height="8" fill="none">
            <path
              stroke="#34495E"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.448"
              d="M5.902 1.466H.833v5.068h5.07V1.466ZM13.868 1.466h-5.07v5.068h5.07V1.466ZM21.833 1.466h-5.069v5.068h5.07V1.466Z"
            />
          </svg>
        </button>

        <button
          class="settings__option"
          :class="{ actived: activedType === 'list' }"
          @click="setType('list')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" fill="none">
            <rect
              width="15"
              height="3.75"
              x="1.5"
              y="1.125"
              stroke="#34495E"
              stroke-width="1.5"
              rx=".75"
            />
            <rect
              width="15"
              height="3.75"
              x="1.5"
              y="7.125"
              stroke="#34495E"
              stroke-width="1.5"
              rx=".75"
            />
          </svg>
        </button>

        <button
          class="settings__option"
          :class="{ actived: activedType === 'ranger' }"
          @click="setType('ranger')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="8" fill="none">
            <path
              stroke="#34495E"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12.917 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM16.667 4h3M1.667 4h7.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="settings">
      <p class="settings__list-title">response</p>
      <div class="settings__list-options row">
        <button
          class="settings__option"
          :class="{ actived: activedResponse === 'then' }"
          @click="setResponse('then')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" fill="none">
            <path
              fill="#34495E"
              d="M1.672 9.494a.97.97 0 0 1-.696-.276.977.977 0 0 1-.288-.72c0-.304.096-.544.288-.72a.97.97 0 0 1 .696-.276.97.97 0 0 1 .696.276c.192.176.288.416.288.72a.977.977 0 0 1-.288.72.97.97 0 0 1-.696.276ZM5.515 9.494c-.704 0-1.248-.18-1.632-.54-.384-.368-.576-.908-.576-1.62V1.586h1.5v5.712c0 .304.076.54.228.708.16.168.38.252.66.252.336 0 .616-.088.84-.264l.42 1.068a1.762 1.762 0 0 1-.648.324c-.256.072-.52.108-.792.108ZM2.25 4.25v-1.2h4.272v1.2H2.25ZM10.865 2.93c.512 0 .968.1 1.368.3.408.2.728.508.96.924.232.408.348.936.348 1.584V9.41h-1.5V5.93c0-.568-.136-.992-.408-1.272-.264-.28-.636-.42-1.116-.42a1.97 1.97 0 0 0-.936.216c-.272.144-.484.36-.636.648-.144.28-.216.636-.216 1.068v3.24h-1.5V.506h1.5V4.73l-.324-.528c.224-.408.548-.72.972-.936.432-.224.928-.336 1.488-.336ZM17.507 9.494c-.712 0-1.336-.14-1.872-.42A3.182 3.182 0 0 1 14.4 7.898c-.288-.496-.432-1.06-.432-1.692 0-.64.14-1.204.42-1.692a3.1 3.1 0 0 1 1.176-1.164c.504-.28 1.076-.42 1.716-.42.624 0 1.18.136 1.668.408.488.272.872.656 1.152 1.152.28.496.42 1.08.42 1.752 0 .064-.004.136-.012.216 0 .08-.004.156-.012.228h-5.34V5.69h4.548l-.588.312a1.841 1.841 0 0 0-.228-.972c-.16-.28-.38-.5-.66-.66a1.835 1.835 0 0 0-.948-.24c-.368 0-.692.08-.972.24-.272.16-.488.384-.648.672-.152.28-.228.612-.228.996v.24c0 .384.088.724.264 1.02.176.296.424.524.744.684.32.16.688.24 1.104.24.36 0 .684-.056.972-.168.288-.112.544-.288.768-.528l.804.924a2.87 2.87 0 0 1-1.092.78c-.432.176-.928.264-1.488.264ZM24.636 2.93c.512 0 .968.1 1.368.3.408.2.728.508.96.924.232.408.348.936.348 1.584V9.41h-1.5V5.93c0-.568-.136-.992-.408-1.272-.264-.28-.636-.42-1.116-.42a1.97 1.97 0 0 0-.936.216c-.272.144-.484.36-.636.648-.144.28-.216.636-.216 1.068v3.24H21V3.002h1.428V4.73l-.252-.528c.224-.408.548-.72.972-.936.432-.224.928-.336 1.488-.336Z"
            />
          </svg>
        </button>

        <button
          class="settings__option"
          :class="{ actived: activedResponse === 'catch' }"
          @click="setResponse('catch')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="10" fill="none">
            <path
              fill="#34495E"
              d="M1.544 9.494a.97.97 0 0 1-.696-.276.977.977 0 0 1-.288-.72c0-.304.096-.544.288-.72a.97.97 0 0 1 .696-.276.97.97 0 0 1 .696.276c.192.176.288.416.288.72a.977.977 0 0 1-.288.72.97.97 0 0 1-.696.276ZM5.857 9.494c-.672 0-1.272-.14-1.8-.42a3.204 3.204 0 0 1-1.224-1.176c-.296-.496-.444-1.06-.444-1.692 0-.64.148-1.204.444-1.692A3.117 3.117 0 0 1 4.057 3.35c.528-.28 1.128-.42 1.8-.42.624 0 1.172.128 1.644.384.48.248.844.616 1.092 1.104L7.44 5.09a1.83 1.83 0 0 0-1.596-.888c-.368 0-.7.08-.996.24-.296.16-.528.392-.696.696-.168.296-.252.652-.252 1.068 0 .416.084.776.252 1.08.168.296.4.524.696.684.296.16.628.24.996.24a1.83 1.83 0 0 0 1.596-.888l1.152.672c-.248.48-.612.852-1.092 1.116-.472.256-1.02.384-1.644.384Z"
            />
            <path
              fill="#34495E"
              d="M12.877 9.41V8.114l-.084-.276V5.57c0-.44-.131-.78-.395-1.02-.264-.248-.665-.372-1.2-.372-.36 0-.716.056-1.069.168a2.617 2.617 0 0 0-.876.468l-.588-1.092c.344-.264.752-.46 1.224-.588.48-.136.977-.204 1.489-.204.928 0 1.643.224 2.147.672.512.44.768 1.124.768 2.052V9.41h-1.415Zm-2.016.084c-.48 0-.9-.08-1.26-.24a2.05 2.05 0 0 1-.84-.684 1.79 1.79 0 0 1-.288-.996c0-.36.084-.684.252-.972.176-.288.46-.516.852-.684.392-.168.912-.252 1.56-.252h1.86v.996h-1.752c-.511 0-.855.084-1.031.252a.777.777 0 0 0-.265.6c0 .272.108.488.325.648.216.16.516.24.9.24.367 0 .696-.084.984-.252.296-.168.508-.416.636-.744l.252.9a1.662 1.662 0 0 1-.78.876c-.368.208-.836.312-1.405.312ZM17.67 9.494c-.704 0-1.248-.18-1.632-.54-.383-.368-.575-.908-.575-1.62V1.586h1.5v5.712c0 .304.075.54.227.708.16.168.38.252.66.252.336 0 .616-.088.84-.264l.42 1.068a1.762 1.762 0 0 1-.648.324c-.256.072-.52.108-.791.108ZM14.407 4.25v-1.2h4.272v1.2h-4.272ZM22.113 9.494c-.671 0-1.271-.14-1.8-.42a3.204 3.204 0 0 1-1.223-1.176c-.296-.496-.445-1.06-.445-1.692 0-.64.149-1.204.445-1.692a3.117 3.117 0 0 1 1.224-1.164c.527-.28 1.128-.42 1.8-.42.623 0 1.171.128 1.643.384.48.248.845.616 1.092 1.104l-1.151.672a1.83 1.83 0 0 0-1.596-.888c-.369 0-.7.08-.997.24-.296.16-.527.392-.695.696-.169.296-.253.652-.253 1.068 0 .416.084.776.253 1.08.168.296.4.524.695.684.296.16.628.24.997.24a1.83 1.83 0 0 0 1.596-.888l1.151.672c-.247.48-.611.852-1.091 1.116-.473.256-1.02.384-1.645.384ZM28.764 2.93c.512 0 .968.1 1.368.3.408.2.728.508.96.924.232.408.348.936.348 1.584V9.41h-1.5V5.93c0-.568-.136-.992-.408-1.272-.264-.28-.636-.42-1.116-.42a1.97 1.97 0 0 0-.936.216c-.272.144-.484.36-.636.648-.144.28-.216.636-.216 1.068v3.24h-1.5V.506h1.5V4.73l-.324-.528c.224-.408.548-.72.972-.936.432-.224.928-.336 1.488-.336Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSettingStore } from '@/stores/settings'

const store = useSettingStore()

const activedType = computed(() => {
  return store.defType
})
function setType(newOption) {
  store.defType = newOption
}

const activedResponse = computed(() => {
  return store.defResponse
})
function setResponse(newOption) {
  store.defResponse = newOption
}

const activedTheme = computed(() => {
  return store.defTheme
})
function setTheme(newOption) {
  store.defTheme = newOption
}
</script>

<style scoped>
.settings + .settings {
  margin-top: 16px;
}
.settings__list-title {
  font-size: 8px;
  padding-bottom: 5px;
  border-bottom: 1px solid #f2f2f2;
  color: #34495e;
}
.settings__list-options {
  margin-top: 7px;
  display: flex;
  gap: 6px;
}
.settings__list-options.column {
  flex-direction: column;
}
.settings__option {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px;
  background-color: #ffffff;
  border: 1px solid #34495e20;
  padding: 0 15px;
  border-radius: 6px;
  transition:
    box-shadow 250ms,
    background-color 500ms;
  cursor: pointer;
  font-size: 10px;
  color: #34495e;
}
.settings__option:hover {
  box-shadow: 0 0 0 3px #34495e10;
}
.settings__option.actived {
  background-color: #f2f2f2;
  border-color: #34495e40;
}
.column .settings__option {
  gap: 8px;
  justify-content: flex-start;
  padding: 8px;
}
</style>
