export const confirm_view = ref<boolean>(false);
export const confirm_message = ref<string>("");
export const confirm_title = ref<string>("")

export const alert_view = ref<boolean>(false);
export const alert_message = ref<string>("");

export const image_viewer = ref<boolean>(false);
export const image_viewer_url = ref<string>("");

export function useShowConfirmModal(title: string, message: string) {
  confirm_title.value = title;
  confirm_message.value = message;
  confirm_view.value = true;
}

export function useShowAlert(message:string){
  alert_message.value = message
  alert_view.value = true;
}

export function useShowImageViewer(url:string){
  image_viewer_url.value = url
  image_viewer.value = true
}