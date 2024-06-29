export type TSportsItem = {

  name: string;
  imageLink: string;
  price: number;
  quantity: number;
  sportType: string;
  brand: string;
  size: string;
  material: string;
  color: string;
  condition: 'new' | 'used'
  weight?: number;
  style?: string;
  branch: "Tangail" | "Chittagong" | "Bagerhat" | "Bandarban" | "Barguna" | "Barisal" | "Bhola" | "Bogra" | "Brahmanbaria" | "Chandpur" | "Chapainawabganj" | "Chuadanga" | "Comilla" | "Cox's Bazar" | "Dhaka" | "Dinajpur" | "Faridpur" | "Feni" | "Gaibandha" | "Gazipur" | "Gopalganj" | "Habiganj" | "Jamalpur" | "Jessore" | "Jhalokati" | "Jhenaidah" | "Joypurhat" | "Khagrachari" | "Khulna" | "Kishoreganj" | "Kurigram" | "Kushtia" | "Lakshmipur" | "Lalmonirhat" | "Madaripur" | "Magura" | "Manikganj" | "Meherpur" | "Moulvibazar" | "Munshiganj" | "Mymensingh" | "Naogaon" | "Narail" | "Narayanganj" | "Narsingdi" | "Natore" | "Netrokona" | "Nilphamari" | "Noakhali" | "Pabna" | "Panchagarh" | "Patuakhali" | "Pirojpur" | "Rajbari" | "Rajshahi" | "Rangamati" | "Rangpur" | "Satkhira" | "Shariatpur" | "Sherpur" | "Sirajganj" | "Sunamganj" | "Sylhet" | "Tangail" | "Thakurgaon";
  isCheckedToDelete?: boolean;
}


export type TFilterOptions = {
  sportType?: string;
  brand?: string;
  size?: string;
  priceRange?: [number, number];
  minPrice?: number;
  maxPrice?: number;
  material?: string;
  color?: string;
  condition?: 'new' | 'used';
  weight?: number;
  style?: string;

}
