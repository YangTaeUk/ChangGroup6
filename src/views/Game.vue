<template>
    <v-layout class="rounded rounded-md" style="width: 100vw;height: 95vh;">
      <v-app-bar color="black" title="">
        <v-container class="bg-surface-variant">
            <v-row no-gutters>
            <v-col
                cols="12"
                sm="1" >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-col>
            <v-col
                cols="12"
                sm="10">
                <v-tabs
                    v-model="tab"
                    color="deep-purple-accent-4"
                    align-tabs="center"
                    >
                    <v-tab :value="1">나의현황</v-tab>
                    <v-tab :value="2">방아하기</v-tab>
                    <v-tab :value="3">공격하기</v-tab>
                    </v-tabs>
            </v-col>
            <v-col
                cols="12"
                sm="1" >
                
            </v-col>
            </v-row>
        </v-container>
        
      </v-app-bar>
      <v-main class="d-flex align-center justify-center" style="background-color: black;height: ;">
        <!-- <v-responsive :aspect-ratio="16 / 9" class="border pa-4"></v-responsive> -->
        <!-- <v-card>
          <v-card-text style="height: 700px;width: 1200px;">
            
          </v-card-text>
        </v-card> -->
        <v-window v-model="tab" class="align-center justify-center" style="height: 700px;width: 1200px;background-color: black;color: white;">
            <v-card>
                <v-window v-model="tab">
                <v-window-item
                    v-for="n in 3"
                    :key="n"
                    :value="n"
                >
                    <v-container fluid>
                    <v-row>
                        <v-col
                        v-for="i in 6"
                        :key="i"
                        cols="12"
                        md="4"
                        >
                        <v-img
                            :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                            :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                            aspect-ratio="1"
                        ></v-img>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-window-item>
                </v-window>
            </v-card>
        </v-window>
        
      </v-main>
      
    </v-layout>
    <v-footer class="text-center d-flex flex-column" style="background-color:black;color: white;">\
  </v-footer>

  </template>
  <script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>
<style scoped>
</style>