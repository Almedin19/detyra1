const produkte = [
  { id: 1, emri: "Uj", cmimi: 0.25, vat: 8, qty: 240 },
  { id: 2, emri: "Chips", cmimi: 2.4, vat: 8, qty: 38 },
  { id: 3, emri: "Tv", cmimi: 760, vat: 22, qty: 1 },
  { id: 4, emri: "Coca Cola", cmimi: 0.5, vat: 18, qty: 77 },
  { id: 5, emri: "Cokollad", cmimi: 1.25, vat: 22, qty: 38 },
  { id: 6, emri: "Sapun", cmimi: 3.78, vat: 8, qty: 92 },
  { id: 7, emri: "Peshk", cmimi: 8.3, vat: 18, qty: 49 },
  { id: 8, emri: "Humus", cmimi: 2.66, vat: 18, qty: 16 },
  { id: 9, emri: "Vere e bardh", cmimi: 9.2, vat: 18, qty: 18 },
  { id: 10, emri: "Banane", cmimi: 1.99, vat: 22, qty: 8 },
  { id: 11, emri: "Shishe vere", cmimi: 9.72, vat: 22, qty: 22 },
  { id: 12, emri: "Vaj", cmimi: 8.3, vat: 18, qty: 10 },
  { id: 13, emri: "Cigare", cmimi: 5.46, vat: 22, qty: 89 },
  { id: 14, emri: "Biskota", cmimi: 1.34, vat: 8, qty: 33 },
  { id: 15, emri: "Jogurt", cmimi: 0.66, vat: 18, qty: 14 },
  { id: 16, emri: "Salvete", cmimi: 1.3, vat: 8, qty: 85 },
  { id: 17, emri: "Vezë", cmimi: 0.16, vat: 8, qty: 104 },
  { id: 18, emri: "Kese plastike", cmimi: 0.14, vat: 18, qty: 398 },
  { id: 19, emri: "Briska", cmimi: 5.77, vat: 18, qty: 51 },
  { id: 20, emri: "Losion", cmimi: 12, vat: 18, qty: 205 },
  { id: 21, emri: "Folie alumini", cmimi: 1.12, vat: 8, qty: 21 },
  { id: 22, emri: "Karriga", cmimi: 30, vat: 20, qty: 25 },
];

export default produkte;

// ● 240 shishe uji me çmim 0.25$ për shishe me TVSH të: 8%
// ● 38 copë chips me çmim 2.40$ për copë me TVSH të: 8%
// ● 1 TV me çmim 760$ me TVSH të: 22%
// ● 77 coca cola me çmim 0.50$ për copë me TVSH të 18% dhe zbritje prej 0.10$ për copë
// ● 38 copë çokollatë me çmim 1.25$ për copë me TVSH të: 22%
// ● 92 shishe sapuni me çmim 3.78$ për copë me TVSH të: 8%
// ● 49 kg mish peshku me çmim 8.30$ për kg me TVSH të: 18%
// ● 16 pako humus me çmim 2.66$ për copë me TVSH të: 18%
// ● 18 shishe verë të bardhë me çmim 9.20$ për copë me TVSH të 18% dhe zbritje prej
// 0.02$ për copë
// ● 8kg bananas me çmim 1.25$ për kg me TVSH të: 22%
// ● 22 shishe verë me çmim 9.78$ për copë me TVSH të: 22%
// ● 10l vaj me çmim 8.30$ për litër me TVSH të: 18%
// ● 89 pako cigaresh me çmim 5.46$ për copë me TVSH të: 22%
// ● 33 pako biskotash me çmim 1.34$ për pako me TVSH të: 8%
// ● 14 jogurte me çmim 0.66$ për copë me TVSH të: 18%
// ● 11 pako çfarësh me çmim 1.23$ për pako me TVSH të: 22%
// ● 85 pako salvete me çmim 0.21$ për pako me TVSH të: 8%
// ● 104 vezë me çmim 0.16$ për copë me TVSH të: 18%
// ● 398 kese plastike me çmim 0.05$ për copë me TVSH të: 18%
// ● 21 folie aluminiu me çmim 1.12$ për copë me TVSH të: 8%
// ● 51 briska me çmim 8.10$ për copë me TVSH të: 8%
// ● 205 losione me çmim 12$ për copë me TVSH të: 22%
