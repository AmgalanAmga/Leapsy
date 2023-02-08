type TOrderType = {
  item: {
    id: number;
    quantity: number;
    date: any;
    totalPrice: number;
    status: string;
  };
};
interface Window {
  recaptchaVerifier: any;
  confirmationResult: any;
}
