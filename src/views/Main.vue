<template>

    <v-layout class="rounded rounded-md" style="width: 100vw;height: 95vh;">
      <v-app-bar color="black" title="">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-btn prepend-icon="$vuetify" variant="tonal" href="/game" >
          게임하러가기
        </v-btn>
        <v-spacer/>
        <v-tabs
            v-model="tab"
            bg-color="black"
          >
            <v-tab value="one">WakeUpWar</v-tab>
            <v-tab value="two">Description</v-tab>
            <v-tab value="three">이렇게 참여 해요</v-tab>
            <v-tab value="four">Q & A</v-tab>
          </v-tabs>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main class="d-flex align-center justify-center" style="background-color: black;height: ;">
        <!-- <v-responsive :aspect-ratio="16 / 9" class="border pa-4"></v-responsive> -->
        <!-- <v-card>
          <v-card-text style="height: 700px;width: 1200px;">
            
          </v-card-text>
        </v-card> -->
        <v-window v-model="tab" class="align-center justify-center" style="height: 700px;width: 1200px;background-color: black;color: white;">
              <v-window-item value="one">
                <v-img
                  :elevation="isHovering ? 12 : 2"
                  v-bind="props"
                  class="align-center" 
                  width="max"
                  lazy-src="https://picsum.photos/id/11/100/60"
                  src="@/assets/WakeUpWar.png"
                >
                  <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                      <v-progress-circular
                        color="grey-lighten-4"
                        indeterminate
                      ></v-progress-circular>
                    </div>
                  </template>
                </v-img>
              </v-window-item>
              <v-window-item value="two" class="align-center">
               <!-- style="  display: grid;  place-items: center;  min-height: 100dvh;"> -->
               <div class="d-flex justify-center">
                <v-card width="900px" style="margin-top: 100px;margin-bottom: 60px;">
                  <v-card-title class="text-h6 text-md-h5 text-lg-h4">게임으로 즐기는 기상 알람 및 기상 확인 서비스</v-card-title>
                  <v-card-text>
                    현대인들은 늘 피곤하고 지쳐있다. 알람을 5분 간격으로 6개나 맞추었지만, 알람을 끄고, 다시 자고를 반복하다 결국 또 지각을 한다.
                    아침에 일찍 일어나는 일이 고역이 아닌 즐거운 게임이 될 수는 없는걸까?
                  </v-card-text>
                </v-card>
              </div>
                <v-timeline direction="horizontal">
                  <v-timeline-item>
                    <template v-slot:opposite>
                      Opposite content
                    </template>
                    <div>
                      <div class="text-h6">Content title</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </v-timeline-item>

                  <v-timeline-item>
                    <template v-slot:opposite>
                      Opposite content
                    </template>
                    <div>
                      <div class="text-h6">Content title</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </v-timeline-item>

                  <v-timeline-item>
                    <template v-slot:opposite>
                      Opposite content
                    </template>
                    <div>
                      <div class="text-h6">Content title</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-window-item>
              <v-window-item value="three">
                <v-list lines="two" style="margin-top: 100px;margin-bottom: 60px;">
                  <v-list-item
                    :title="'방어자 관점 1)'"
                    subtitle="내일 아침 정말 중요한 미팅이 예정되어 있다. WAKE UP WAR에 접속, (실제 돈이 아닌 게임상의) 게임머니 3,000포인트를 충전 후, 다음날 아침 일어나야 하는 시간에 WAKE UP WAR 알람서비스를 신청하며 게임 참여 의사를 밝힌다. (예시, 오전 6시)"
                  ></v-list-item>
                  <v-list-item
                    :title="'방어자 관점 2)'"
                    subtitle="다음날 아침, 6시가 되면 게임이 시작된다. WAKE UP WAR로부터 온 알람이 울리고, 참여자는 기상을 해 잠에서 깨어 났음을 밝혀야 한다. 알람소리에 일어나지 못한다면 게임을 시작하자마자 패하게 되고, 3,000포인트이 차감된다."
                  ></v-list-item>
                  <v-list-item
                    :title="'방어자 관점 3)'"
                    subtitle="알람 소리를 듣고 기상 후 깨어 났음을 밝혔어도, 다시 잠에 드는 일이 없어야 하기에, 30분 내 랜덤한 시간에 생존확인 푸시알림(다른 사용자의 공격)이 10분당 1회, 최대 3회 더 울릴 수 있다. 참여자는 5분 내에 푸시알림의 링크로 접속, [난 깨어있소, 돌아가시오] 버튼을 눌러야 방어에 성공한다. 버튼을 누르지 못한다면 1분당 100포인트씩 게임머니가 차감된다."
                  ></v-list-item>
                  <v-list-item
                    :title="'방어자 관점 4)'"
                    subtitle="30분간 다른 공격자의 공격으로부터 방어에 성공한다면 게임머니 3,000포인트를 획득한다."
                  ></v-list-item>
                  <v-list-item
                    :title="'공격자 관점 1)'"
                    subtitle="일찍 일어난 김에 WAKE UP WAR에 접속, 못일어날까 노심초사 하고 있는 방어자 들의 ID를 확인한다."
                  ></v-list-item>
                  <v-list-item
                    :title="'공격자 관점 2)'"
                    subtitle="의지박약일 것 같은 ID를 선택, 푸시 알림 메시지를 보낸다. (공격)"
                  ></v-list-item>
                  <v-list-item
                    :title="'공격자 관점 3)'"
                    subtitle="방어자가 깨어있다면 공격은 실패하게 되고, 방어자가 깨어나지 못한다면 공격은 성공, 1분당 100포인트, 최대 10분간 1,000포인트를 획득하게 된다."
                  ></v-list-item>
                  <v-list-item
                    :title="''"
                    subtitle="*공격자와 방어자 모두 월 1회, 3,000포인트의 초과분에 대한 포인트를 현금화 할 수 있다. (편집됨) "
                  ></v-list-item>
                </v-list>
              </v-window-item>
              <v-window-item value="four">
                <v-timeline side="end">
                  <!-- 방어자 관점 -->
                  <v-timeline-item
                    dot-color="info"
                    size="small"
                  > 
                    <v-alert
                      :value="true"
                      color="info"
                      :icon="mdi-information"
                    >
                    내일 아침 정말 중요한 미팅이 예정되어 있다. WAKE UP WAR에 접속, (실제 돈이 아닌 게임상의) 게임머니 3,000포인트를 충전 후, 다음날 아침 일어나야 하는 시간에 WAKE UP WAR 알람서비스를 신청하며 게임 참여 의사를 밝힌다. (예시, 오전 6시)
                    </v-alert>
                  </v-timeline-item>
                  <v-timeline-item
                    dot-color="info"
                    size="small"
                  > 
                    <v-alert
                      :value="true"
                      color="info"
                      :icon="mdi-information"
                    >
                    다음날 아침, 6시가 되면 게임이 시작된다. WAKE UP WAR로부터 온 알람이 울리고, 참여자는 기상을 해 잠에서 깨어 났음을 밝혀야 한다. 알람소리에 일어나지 못한다면 게임을 시작하자마자 패하게 되고, 3,000포인트이 차감된다.
                    </v-alert>
                  </v-timeline-item>
                  <v-timeline-item
                    dot-color="info"
                    size="small"
                  > 
                    <v-alert
                      :value="true"
                      color="info"
                      :icon="mdi-information"
                    >
                    알람 소리를 듣고 기상 후 깨어 났음을 밝혔어도, 다시 잠에 드는 일이 없어야 하기에, 30분 내 랜덤한 시간에 생존확인 푸시알림(다른 사용자의 공격)이 10분당 1회, 최대 3회 더 울릴 수 있다. 참여자는 5분 내에 푸시알림의 링크로 접속, [난 깨어있소, 돌아가시오] 버튼을 눌러야 방어에 성공한다. 버튼을 누르지 못한다면 1분당 100포인트씩 게임머니가 차감된다.
                    </v-alert>
                  </v-timeline-item>
                  <v-timeline-item
                    dot-color="info"
                    size="small"
                  > 
                    <v-alert
                      :value="true"
                      color="info"
                      :icon="mdi-information"
                    >
                    30분간 다른 공격자의 공격으로부터 방어에 성공한다면 게임머니 3,000포인트를 획득한다.
                    </v-alert>
                  </v-timeline-item>
                  <!-- 공격자 관점 -->
                  <v-timeline-item
                    dot-color="error"
                    size="small"
                  > 
                    <v-alert
                      :value="true"
                      color="error"
                      :icon="mdi-alert-circle"
                    >
                    일찍 일어난 김에 WAKE UP WAR에 접속, 못일어날까 노심초사 하고 있는 방어자 들의 ID를 확인한다.
                  </v-alert>
                  </v-timeline-item>
                  <v-timeline-item
                    dot-color="error"
                    size="small"
                  > 
                    <v-alert
                      :value="true"
                      color="error"
                      :icon="mdi-alert-circle"
                    >
                    의지박약일 것 같은 ID를 선택, 푸시 알림 메시지를 보낸다. (공격)
                    </v-alert>
                  </v-timeline-item>
                  <v-timeline-item
                    dot-color="error"
                    size="small"
                  > 
                    <v-alert
                      :value="true"
                      color="error"
                      :icon="mdi-alert-circle"
                    >
                    방어자가 깨어있다면 공격은 실패하게 되고, 방어자가 깨어나지 못한다면 공격은 성공, 1분당 100포인트, 최대 10분간 1,000포인트를 획득하게 된다.
                    *공격자와 방어자 모두 월 1회, 3,000포인트의 초과분에 대한 포인트를 현금화 할 수 있다. (편집됨) 
                    </v-alert>
                  </v-timeline-item>
                </v-timeline>
              </v-window-item>
            </v-window>
        
      </v-main>
      
    </v-layout>
    <v-divider
      :thickness="3"
      class="border-opacity-75"
      color="white"
    ></v-divider>
    <v-footer class="text-center d-flex flex-column" style="background-color:black;color: white;">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div>
      {창} 7기 6조 - <strong>Wake Up to Earn (W2E) 1.0ver</strong>
    </div>
  </v-footer>

  </template>
  <script>
  import Description from '@/components/Description.vue'
  import QA from '@/components/QA.vue'
  const variants = ['elevated', 'flat', 'tonal', 'outlined']
  export default {
    data: () => ({
      tab: null,
      show: false,
      items: [
        {
          id: 1,
          color: 'info',
          icon: 'mdi-information',
        },
        {
          id: 2,
          color: 'error',
          icon: 'mdi-alert-circle',
        },
      ],
    }),
    methods: {
      // onClick () {
      //   this.snackbar = false
      // },
    },
  }
</script>
<style scoped>
</style>
