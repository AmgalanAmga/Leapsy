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
type TOrderProps = {
  image: string;
  shots: string;
  cupSize: string;
  name: string;
  price: string;
  foam: string;
  whip: string;
};
