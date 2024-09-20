<script lang="ts" setup>
const tabs = ref('주문정보')
const active = ref(2)
const workAdd = ref('')
const orderCancelModal = ref(false)
const productCheck = ref(false)
const pickupComplete = ref(false)

const userPayMessage = () => useShowConfirmModal('결제독촉', '사용자에게 결제독촉 메세지를 발송할까요?');
const pickupMessage = () => useShowConfirmModal('수거지연', '사용자에게 수거지연 메세지를 발송할까요?');
const deliveryMessage = () => useShowConfirmModal('배송지연', '사용자에게 배송지연 메세지를 발송할까요?');
const workDelete = () => useShowConfirmModal('작업삭제', '해당작업을 삭제할까요?');
const userMessage = () => useShowAlert('아직 준비중입니다');

</script>

<template>
  <ModalProductCheck v-model="productCheck" />
  <ModalBase v-model="pickupComplete" title="수거완료">
    <div class="min-w-[400px]">
      <a class="min-h-[200px] border border-dashed border-gray-300 rounded-md block flex-col flex-center cursor-pointer hover:bg-gray-100">
        <Icon name="mdi:camera-outline" size="32"></Icon>
        <span class="text-sm mt-1 text-gray-500">이미지 등록</span>
      </a>
    </div>
  </ModalBase>
  <ModalBase v-model="orderCancelModal" title="주문취소">
    <div class="min-w-[500px] flex flex-col gap-10">
      <dl class="flex flex-col gap-3">
        <dt>취소방법 선택</dt>
        <dd class="flex flex-col gap-2">
          <label class="flex items-center gap-3 bg-gray-100 rounded-md p-3 hover:bg-gray-200 cursor-pointer">
            <input type="radio" class="peer w-5 h-5" name="cancel" checked>
            <span>결제된 모든 금액을 환불하고 주문을 취소합니다.</span>
          </label>
          <label class="flex items-center gap-3 bg-gray-100 rounded-md p-3 hover:bg-gray-200 cursor-pointer">
            <input type="radio" class="peer w-5 h-5" name="cancel">
            <span><b class="text-red-600 font-normal">패널티(5,000원)</b> 부과후 주문을 취소합니다.</span>
          </label>
        </dd>
      </dl>
      <dl class="flex flex-col gap-3">
        <dt>수거된 물품이 있나요?</dt>
        <dd class="flex flex-col gap-2">
          <label class="flex items-center gap-3 bg-gray-100 rounded-md p-3 hover:bg-gray-200 cursor-pointer">
            <input type="radio" class="peer w-5 h-5" name="delivery" checked>
            <span>수거된 물품이 없습니다.</span>
          </label>
          <label class="flex items-center gap-3 bg-gray-100 rounded-md p-3 hover:bg-gray-200 cursor-pointer">
            <input type="radio" class="peer w-5 h-5" name="delivery">
            <span>배송해야될 물품이 있습니다.(배송작업추가)</span>
          </label>
        </dd>
      </dl>
    </div>
  </ModalBase>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <UButton class="w-10 h-10 rounded-full" color="black" @click="$router.go(-1)">
          <Icon name="mdi:arrow-left" size="20"></Icon>
        </UButton>
        <h2 class="text-2xl font-bold">주문상세 - <b class="text-blue-600">4561</b></h2>
      </div>
      <div class="flex items-center gap-1 p-1 bg-gray-200 rounded-md">
        <UButton type="button" color="white" class="h-9 px-3" @click="orderCancelModal = true">주문취소</UButton>
        <UButton type="button" color="white" class="h-9 px-3" @click="userPayMessage">결제독촉</UButton>
        <UButton type="button" color="white" class="h-9 px-3" @click="pickupMessage">수거지연</UButton>
        <UButton type="button" color="white" class="h-9 px-3" @click="deliveryMessage">배송지연</UButton>
        <UButton type="button" color="white" class="h-9 px-3" @click="userMessage">메세지전송</UButton>
      </div>
    </div>

    <div class="bg-white p-6 rounded-md mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-5">
          <div class="flex flex-col gap-2">
            <span class="text-gray-500 text-xs">주문상태</span>
            <div class="flex items-center gap-2">
              <span class="text-xs h-7 bg-blue-100 text-blue-600 px-3 rounded-full flex-center" v-if="true">수거</span>
              <span class="text-xs h-7 bg-violet-900 px-3 rounded-full flex-center text-white">주문취소</span>
              <span class="text-xs h-7 bg-green-600 px-3 rounded-full flex-center text-white">재수거</span>
            </div>
          </div>
          <div class="h-10 w-px bg-gray-200"></div>
          <div class="flex flex-col gap-2">
            <span class="text-gray-500 text-xs">담당세탁소</span>
            <span class="font-semibold">워시앤클린 광안점</span>
          </div>
          <div class="h-10 w-px bg-gray-200"></div>
          <div class="flex flex-col gap-2">
            <span class="text-gray-500 text-xs">주문번호</span>
            <span class="font-semibold">A474</span>
          </div>
          <div class="h-10 w-px bg-gray-200"></div>
          <div class="flex flex-col gap-2">
            <span class="text-gray-500 text-xs">주문일시</span>
            <span class="font-semibold">2024-09-01 12:34</span>
          </div>
  
        </div>
        <div class="flex items-center gap-2">
          <USelect v-model="workAdd" :options="['수거', '검수', '출고', '배송']" class="min-w-[100px]" size="md"
            placeholder="작업추가" />
          <UButton color="black" class="h-9 px-3">작업추가</UButton>

        </div>
      </div>

      <div class="flex flex-col gap-2 mt-10">
        <div class="flex items-center">
          <a v-for="item, index in ['주문','수거','검수','세탁','결제','출고','배송','완료']" @click="active = index"
            class="flex-1 flex-center h-10 rounded-md cursor-pointer relative overflow-hidden">
            <span :class="[active === index ? 'font-semibold text-blue-600' : 'text-gray-500']" class="relative z-10">{{
              item }}</span>
            <span class="w-full h-10 absolute z-0 top-0 left-0 bg-blue-50 rounded-md" v-if="active === index"></span>
          </a>
        </div>
        <UProgress :value="active + 1" max="8" class="h-1"></UProgress>
        <div class="flex items-center">
          <div class="flex items-center gap-1 flex-1 bg-blue-50 rounded-md p-1" v-for="item, index in 8" :key="item"
            :class="[active === index ? 'block' : 'invisible']">
            <UButton type="button" class="h-7 flex-1 flex-center text-xs rounded" color="white" @click="workDelete">삭제
            </UButton>
            <UButton type="button" class="h-7 flex-1 flex-center text-xs rounded" @click="pickupComplete = true">완료
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="h-11 px-1 gap-1 bg-gray-900 rounded-md flex items-center mb-4">
        <a v-for="item in ['주문정보','검수상품','결제내역','작업내역']" class="h-9 rounded flex-center px-3 text-sm cursor-pointer "
          :class="[tabs === item ? 'bg-white font-semibold hover:bg-white': ' text-gray-400 hover:bg-gray-700 hover:text-gray-100']"
          @click="tabs = item">
          {{ item }}
        </a>
      </div>

      <OrderInfo v-show="tabs === '주문정보'" />
      <OrderProduct v-show="tabs === '검수상품'" />
      <OrderPayment v-show="tabs === '결제내역'" />
      <OrderWork v-show="tabs === '작업내역'" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>