import Clipboard from "clipboard";
import { message } from "antd";

function clipboardSuccess() {
  message.success("Sao chép thành công");
}

function clipboardError() {
  message.error("Sao chép không thành công");
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  });
  clipboard.on("success", () => {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
