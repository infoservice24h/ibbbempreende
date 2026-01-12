import walDoces from "@/assets/businesses/wal-doces.jpeg";
import naturalAcai from "@/assets/businesses/natural-acai.jpeg";
import valEmCasa from "@/assets/businesses/val-em-casa.jpeg";
import mammothPizza from "@/assets/businesses/mammoth-pizza.jpeg";
import quentinhasMoana from "@/assets/businesses/quentinhas-moana.jpeg";
import deliciasNatalRosi from "@/assets/businesses/delicias-natal-rosi.jpeg";
import deliciasDaPri from "@/assets/businesses/delicias-da-pri.jpeg";
import telmaLima from "@/assets/businesses/telma-lima.jpeg";
import tatianeAguiar from "@/assets/businesses/tatiane-aguiar.jpeg";
import studioMegaHair from "@/assets/businesses/studio-mega-hair.jpeg";
import tiaRosane from "@/assets/businesses/tia-rosane.jpeg";
import doceSom from "@/assets/businesses/doce-som.jpeg";
import liliFestas from "@/assets/businesses/lili-festas.jpeg";
import draGabrielli from "@/assets/businesses/dra-gabrielli.jpeg";
import greyHouse from "@/assets/businesses/grey-house.jpeg";
import pabloEstetica from "@/assets/businesses/pablo-estetica.jpeg";
import munizFretes from "@/assets/businesses/muniz-fretes.jpeg";
import ajaxEstetica from "@/assets/businesses/ajax-estetica.jpeg";
import marliCroche from "@/assets/businesses/marli-croche.jpeg";
import janineArtesanato from "@/assets/businesses/janine-artesanato.jpeg";
import carbonelliInformatica from "@/assets/businesses/carbonelli-informatica.jpeg";
import beaMakeup from "@/assets/businesses/bea-makeup.jpeg";
import eliteFilm from "@/assets/businesses/elite-film.jpeg";

export type Category = 
  | "Todos"
  | "Gastronomia"
  | "Saúde & Bem-estar"
  | "Beleza"
  | "Educação"
  | "Festas"
  | "Serviços"
  | "Artesanato";

export interface Business {
  id: string;
  name: string;
  category: Category;
  description: string;
  phone: string;
  instagram?: string;
  address?: string;
  image: string;
  highlights: string[];
}

export const categories: Category[] = [
  "Todos",
  "Gastronomia",
  "Saúde & Bem-estar",
  "Beleza",
  "Educação",
  "Festas",
  "Serviços",
  "Artesanato",
];

export const businesses: Business[] = [
  // Gastronomia
  {
    id: "wal-doces",
    name: "Wal Doces e Salgados",
    category: "Gastronomia",
    description: "Bolos artesanais, docinhos para festa, empadinhas e muito mais. Faça sua encomenda!",
    phone: "21 96823-1551",
    image: walDoces,
    highlights: ["Bolos Artesanais", "Bolos no Pote", "Docinhos para Festa", "Empadão", "Empadinhas"],
  },
  {
    id: "natural-acai",
    name: "Natural Açaí",
    category: "Gastronomia",
    description: "Açaí natural e cremoso com diversas opções de complementos. Venha experimentar!",
    phone: "",
    address: "Rua Marquês Lafaiete 01, Pq Equitativa",
    image: naturalAcai,
    highlights: ["Açaí Natural", "Complementos Variados", "Creme de Cupuaçu"],
  },
  {
    id: "val-em-casa",
    name: "Val em Casa",
    category: "Gastronomia",
    description: "Bolos caseiros com diversos tamanhos, sabores e valores. Encomende o seu!",
    phone: "(21) 99494-0261",
    image: valEmCasa,
    highlights: ["Bolo Caseiro", "Diversos Sabores", "Tamanhos Variados"],
  },
  {
    id: "mammoth-pizza",
    name: "Mammoth Pizza",
    category: "Gastronomia",
    description: "A melhor pizza da cidade! Pizzas artesanais feitas com ingredientes selecionados.",
    phone: "(21) 98753-2091",
    instagram: "@mammoth_pizzaria",
    image: mammothPizza,
    highlights: ["Pizzas Artesanais", "Ingredientes Selecionados", "Delivery"],
  },
  {
    id: "quentinhas-moana",
    name: "Quentinhas da Moana",
    category: "Gastronomia",
    description: "Quentinhas deliciosas por apenas R$ 9,99! Funcionamento das 11h às 15h.",
    phone: "021966814398",
    address: "Av. Automóvel Clube, 700, Parque Nova Campinas, DC",
    image: quentinhasMoana,
    highlights: ["Quentinha R$ 9,99", "Dinheiro, Cartão e Pix", "11h às 15h"],
  },
  {
    id: "delicias-natal-rosi",
    name: "Delícias da Rosi",
    category: "Gastronomia",
    description: "Sobremesas e salgados especiais feitos com muito carinho. Pudim, mousse, quiches e muito mais!",
    phone: "96630-9707",
    image: deliciasNatalRosi,
    highlights: ["Pudim", "Mousse", "Brigadeirão", "Quiches", "Empadão"],
  },
  {
    id: "delicias-da-pri",
    name: "Delícias da Pri",
    category: "Gastronomia",
    description: "Brownie, empada, pudim, tortinha e bolo por Priscila Escobar. Sabor e cremosidade em cada mordida!",
    phone: "(21) 98066-9180",
    instagram: "@deliciasdaprioriginal",
    address: "Duque de Caxias, RJ",
    image: deliciasDaPri,
    highlights: ["Brownie", "Empada", "Pudim", "Tortinha", "Bolo"],
  },

  // Saúde & Bem-estar
  {
    id: "telma-lima",
    name: "Telma Lima - Psicanalista",
    category: "Saúde & Bem-estar",
    description: "Sua saúde mental importa! Terapia de casal e familiar. Atendimento presencial e online.",
    phone: "21 980756959",
    image: telmaLima,
    highlights: ["Terapia de Casal", "Terapia Familiar", "Atendimento Online", "Atendimento Presencial"],
  },
  {
    id: "tatiane-aguiar",
    name: "Tatiane Aguiar - Psicanalista",
    category: "Saúde & Bem-estar",
    description: "Pós-graduanda em ACP e Graduanda em Psicologia. Atendimento online para ansiedade, luto, depressão, estresse e traumas.",
    phone: "(21) 98142-9304",
    instagram: "@tatianetito.psicanalista",
    image: tatianeAguiar,
    highlights: ["Ansiedade", "Luto/Perdas", "Depressão", "Terapia Online", "Fobia Social"],
  },
  {
    id: "dra-gabrielli",
    name: "Dra. Gabrielli Souza - Dentista",
    category: "Saúde & Bem-estar",
    description: "Cirurgiã-Dentista CRO-RJ 057024. Clareamento dental, prótese, profilaxia e muito mais.",
    phone: "(21) 98435-2777",
    instagram: "@dragabriellis",
    image: draGabrielli,
    highlights: ["Clareamento Dental", "Prótese", "Profilaxia", "Extração", "Tratamento Restaurador"],
  },

  // Beleza
  {
    id: "studio-mega-hair",
    name: "Studio Mega Hair - Adriana Bianco",
    category: "Beleza",
    description: "Escova progressiva sem formol. Cabelos lindos começam com um agendamento!",
    phone: "(21) 99349-5969",
    image: studioMegaHair,
    highlights: ["Escova Progressiva", "Sem Formol", "Mega Hair"],
  },
  {
    id: "bea-makeup",
    name: "By Bea Make-Up",
    category: "Beleza",
    description: "Maquiagem profissional para todas as ocasiões. Realce sua beleza!",
    phone: "21 96620-4444",
    image: beaMakeup,
    highlights: ["Maquiagem Profissional", "Eventos", "Noivas"],
  },

  // Educação
  {
    id: "tia-rosane",
    name: "Explicadora Tia Rosane",
    category: "Educação",
    description: "Reforço escolar com atenção, paciência e resultados! Auxílio em tarefas e preparação para provas.",
    phone: "21 99354-7271",
    address: "Rua H lote 03, Quadra 35, Jardim Anhangá, Duque de Caxias, RJ",
    image: tiaRosane,
    highlights: ["Reforço Escolar", "Tarefas Escolares", "Preparação para Provas", "Atividades Extras"],
  },
  {
    id: "doce-som",
    name: "Escola de Música Doce Som",
    category: "Educação",
    description: "Transforme sonhos em melodias. Venha estudar música conosco! Um projeto da Igreja Batista no Barro Branco.",
    phone: "(21) 99973-6695",
    image: doceSom,
    highlights: ["Teclado", "Violão", "Violino", "Violoncelo", "Canto"],
  },

  // Festas
  {
    id: "lili-festas",
    name: "Lili Festas - Pegue e Monte",
    category: "Festas",
    description: "A sua festa começa aqui! Aluguel de itens para festas.",
    phone: "(21) 98712-7887",
    instagram: "@lilifestaspegueemonte",
    image: liliFestas,
    highlights: ["Pegue e Monte", "Decoração de Festas", "Aluguel"],
  },
  {
    id: "grey-house",
    name: "Espaço Grey House",
    category: "Festas",
    description: "Espaço para eventos e festas. Reserve já o seu evento!",
    phone: "(21) 98533-5192",
    instagram: "@EspacoGreyHouse",
    image: greyHouse,
    highlights: ["Espaço para Festas", "Eventos", "Reservas"],
  },

  // Serviços
  {
    id: "pablo-estetica",
    name: "Pablo Escobar - Estética Automotiva",
    category: "Serviços",
    description: "Estética automotiva profissional. Deixe seu veículo impecável!",
    phone: "21 98618-8935",
    address: "Rua F 538, Nova Campinas",
    image: pabloEstetica,
    highlights: ["Estética Automotiva", "Lavagem", "Polimento"],
  },
  {
    id: "muniz-fretes",
    name: "Muniz Fretes e Locação de Mesas",
    category: "Serviços",
    description: "Pequenos fretes rápidos e locação de mesas e cadeiras para eventos. Preços acessíveis e fácil contato!",
    phone: "21 9741-82316",
    image: munizFretes,
    highlights: ["Pequenos Fretes", "Mesas e Cadeiras", "Eventos", "Preços Acessíveis"],
  },
  {
    id: "ajax-estetica",
    name: "AJ Ajax Estética Automotiva",
    category: "Serviços",
    description: "Cuide bem de quem te leva pra todos os lugares! Lavagem especializada com nosso especialista.",
    phone: "(21) 99690-4273",
    address: "Rua Epitácio Pessoa QD 6 LT 27, Jardim Barro Branco",
    image: ajaxEstetica,
    highlights: ["Lavagem Especializada", "Estética Automotiva", "Agendamento"],
  },
  {
    id: "carbonelli-informatica",
    name: "Carbonelli Informática",
    category: "Serviços",
    description: "Seu PC não está ligando? Temos a solução certa para seu problema! Atendemos todo Rio e Grande Rio.",
    phone: "21 9 80105338",
    image: carbonelliInformatica,
    highlights: ["Manutenção de PC", "Orçamento Grátis", "Atendimento Domiciliar"],
  },
  {
    id: "elite-film",
    name: "Elite Film - Insulfilm",
    category: "Serviços",
    description: "Transforme seu carro com insulfilm de qualidade! Proteção e conforto térmico.",
    phone: "(21) 98001-5993",
    address: "Avenida Automóvel Clube, 550, em frente ao Bauru",
    image: eliteFilm,
    highlights: ["Insulfilm", "Proteção Solar", "Conforto Térmico"],
  },

  // Artesanato
  {
    id: "marli-croche",
    name: "Marli Crochê",
    category: "Artesanato",
    description: "Artesanato feito com amor! Peças de crochê exclusivas e personalizadas.",
    phone: "21 98780-8159",
    instagram: "@MARLICROCHE00_",
    image: marliCroche,
    highlights: ["Crochê Artesanal", "Peças Exclusivas", "Feito com Amor"],
  },
  {
    id: "janine-artesanato",
    name: "Janine Artesanato",
    category: "Artesanato",
    description: "Tapetes, jogos de banheiro, jogos de cozinha e sousplats feitos à mão com muito carinho.",
    phone: "21 97355-6448",
    image: janineArtesanato,
    highlights: ["Tapetes", "Jogos de Banheiro", "Jogos de Cozinha", "Sousplats"],
  },
];
