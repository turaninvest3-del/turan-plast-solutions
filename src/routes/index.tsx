import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Factory,
  Truck,
  ShieldCheck,
  Repeat,
  Layers,
  Users,
  MapPin,
  Mail,
  Globe,
  ArrowRight,
  Check,
  Package,
  ShoppingBag,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { Logo } from "@/components/Logo";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import bagHandle from "@/assets/bag-handle.jpg.asset.json";
import bagFlat from "@/assets/bag-flat.jpg.asset.json";
import pricelistHero from "@/assets/pricelist-hero.jpg.asset.json";
import magnumLogo from "@/assets/magnum.png.asset.json";
import toimartLogo from "@/assets/toimart.png.asset.json";
import galmartLogo from "@/assets/galmart.webp.asset.json";
const metroLogo = { url: "/assets/partners/Logo_METRO.svg.webp" };
import smallLogo from "@/assets/small.png.asset.json";
import {
  WHATSAPP_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  SITE,
  COMPANY,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const NAV = [
  { href: "#about", label: "О нас" },
  { href: "#products", label: "Продукция" },
  { href: "#why", label: "Преимущества" },
  { href: "#partners", label: "Партнёры" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <HowWeWork />
        <Partners />
        <Reviews />
        <Faq />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex-shrink-0">
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PHONE_HREF}
            className="text-sm font-semibold text-foreground hover:text-primary"
          >
            {PHONE_DISPLAY}
          </a>
          <Button asChild className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
        <button
          type="button"
          aria-label="Меню"
          className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-soft"
              >
                {n.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={PHONE_HREF}
                className="rounded-md border border-border px-3 py-2 text-sm font-semibold"
              >
                {PHONE_DISPLAY}
              </a>
              <Button asChild className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Написать в WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-primary-deep text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.85 0.15 90 / 0.35), transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.7 0.14 210 / 0.35), transparent 45%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:gap-8 md:px-6 md:py-24">
        <Reveal>
          <Badge className="mb-5 border-white/20 bg-white/10 text-white hover:bg-white/15">
            &nbsp;· Производство в Алматы
          </Badge>
          <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl whitespace-pre-line">
            Пакеты для вашего магазина&nbsp;{"\n"}
            <span className="relative inline-block">
              <span className="relative z-10">-&nbsp;без переплат</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 -z-0 h-2 rounded bg-highlight/70 md:h-2.5"
              />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Собственное производство пакетов майка и фасовка в РК.
            Небольшие партии, быстрая отгрузка, повторный заказ — одним
            сообщением в WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 bg-whatsapp px-6 text-whatsapp-foreground hover:bg-whatsapp/90"
            >
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Написать в WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" /> {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative hidden md:block">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl">
            <img
              src={pricelistHero.url}
              alt="Ассортимент пакетов Туран Инвест Пласт"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-background p-4 text-foreground shadow-xl md:block">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Первая поставка
            </div>
            <div className="font-display text-2xl font-extrabold text-primary">
              от 20 000 ₸
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10 bg-black/10">
        <div className="mx-auto grid max-w-7xl gap-y-4 px-4 py-5 text-sm text-white/90 md:grid-cols-4 md:px-6">
          {[
            { icon: Factory, text: "Собственное производство" },
            { icon: Truck, text: "Доставка от 20 000 ₸" },
            { icon: ShieldCheck, text: "Пищевой HDPE-полиэтилен" },
            { icon: Check, text: "Сертификат ТР ТС 005/2011" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-highlight" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border bg-primary-soft/40 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.1fr_1fr] md:items-center md:px-6">
        <Reveal>
          <SectionEyebrow>О компании</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
            Производим пакеты в Алматы — работаем напрямую с торговыми точками
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            ТОО «Туран Инвест Пласт» — производство полиэтиленовых пакетов из
            100% пищевого HDPE. Выпускаем пакеты&nbsp;<b>майка</b> (с ручками) для
            кассы и <b>фасовка</b> (без ручек) для расфасовки товара, а также
            готовые упакованные позиции на полку.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Без посредников — прямая цена от производителя",
              "Обход торгового представителя по Алматы",
              "Официальный договор, работа с ИП и ТОО",
              "Работаем и с сетями, и с точками у дома",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Производство" value="Алматы" hint="ул. Земнухова 3Б" />
            <StatCard label="Материал" value="HDPE" hint="100% первичный полиэтилен" />
            <StatCard label="Партии" value="Гибкие" hint="от 20 000 ₸ на первую поставку" />
            <StatCard label="Сертификат" value="ТР ТС" hint="005/2011 - пищевой HDPE" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 font-display text-2xl font-extrabold text-primary-deep">
        {value}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{hint}</div>
    </div>
  );
}

type Product = {
  name: string;
  size: string;
  qty: string;
  purpose: string;
  price?: string;
  image?: string;
};

const PRODUCTS_STORE: Product[] = [
  { name: "Майка-бомба", size: "25 × 43 см", qty: "300 шт/рул.", purpose: "На кассу", price: "1700 тг" },
  { name: "Фасовка-бомба", size: "25 × 36 см", qty: "450 шт/рул.", purpose: "Расфасовка ", price: "1500 тг" },
  { name: "Майка 30×50", size: "30 × 50 см", qty: "50 шт/уп.", purpose: "На кассу ", price: "400 тг" },
  { name: "Майка 500", size: "уточняется", qty: "500 шт/уп.", purpose: "На кассу", price: "1700 тг" },
  { name: "Фасовка 500", size: "уточняется", qty: "500 шт/уп.", purpose: "Расфасовка ", price: "500 тг" },
  { name: "Мини-майка", size: "20 × 34 см", qty: "180 шт/рул.", purpose: "На кассу", price: "500 тг" },
  { name: "Мини фасовка", size: "18 × 23 см", qty: "250 шт/рул.", purpose: "Расфасовка мелкого товара" },
];

const PRODUCTS_RESELL: Product[] = [
  { name: "Майка 200", size: "25 × 43 см", qty: "200 шт/уп.", purpose: "Готовая упаковка на полку", image: bagHandle.url },
  { name: "Майка 400", size: "30 × 50 см", qty: "400 шт/уп.", purpose: "Крупная фасовка на полку" },
  { name: "Пакеты BIO", size: "уточняется", qty: "уточняется", purpose: "Биоразлагаемые пакеты" },
  { name: "Пакеты для заморозки", size: "уточняется", qty: "уточняется", purpose: "Для хранения и заморозки" },
  { name: "Фасовка 200", size: "25 × 38 см", qty: "200 шт/уп.", purpose: "Готовая упаковка на полку", image: bagFlat.url },
  { name: "Мини-Майка", size: "20 × 34 см", qty: "уточняется", purpose: "На кассу — малый формат" },
  { name: "Мини-Фасовка", size: "18 × 23 см", qty: "уточняется", purpose: "Мелкая расфасовка" },
  { name: "Пакет Садака", size: "уточняется", qty: "уточняется", purpose: "Готовая упаковка на полку" },
  { name: "Пакет SHIVAKI", size: "уточняется", qty: "уточняется", purpose: "Готовая упаковка на полку" },
  { name: "Zip-Lock 8×12", size: "8 × 12 см", qty: "уточняется", purpose: "Зип-пакеты для мелочи" },
  { name: "Zip-Lock 16×24", size: "16 × 24 см", qty: "уточняется", purpose: "Зип-пакеты средние" },
  { name: "Zip-Lock", size: "разные", qty: "по запросу", purpose: "Зип-пакеты, ассортимент" },
];

function Products() {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionEyebrow>Продукция</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold md:text-4xl">
            Две линейки под разные задачи магазина
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Прозрачные пакеты без печати — для собственных нужд точки и готовые
            упакованные позиции для продажи вашим покупателям.
          </p>
        </Reveal>

        <Tabs defaultValue="store" className="mt-8">
          <TabsList className="grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-2">
            <TabsTrigger
              value="store"
              className="flex h-auto items-start gap-3 rounded-xl border border-border bg-card p-4 text-left data-[state=active]:border-primary data-[state=active]:bg-primary-soft data-[state=active]:shadow-sm"
            >
              <Package className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="font-display font-bold">Для магазина: касса и расфасовка</div>
                <div className="text-xs text-muted-foreground">
                  Без потребительской упаковки
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="resell"
              className="flex h-auto items-start gap-3 rounded-xl border border-border bg-card p-4 text-left data-[state=active]:border-primary data-[state=active]:bg-primary-soft data-[state=active]:shadow-sm"
            >
              <ShoppingBag className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="font-display font-bold">На продажу вашим покупателям</div>
                <div className="text-xs text-muted-foreground">
                  Упакованные позиции -&nbsp;готовы к полке
                </div>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="store" className="mt-8">
            <ProductGrid items={PRODUCTS_STORE} badge="Для магазина" />
          </TabsContent>
          <TabsContent value="resell" className="mt-8">
            <ProductGrid items={PRODUCTS_RESELL} badge="На полку" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProductGrid({ items, badge }: { items: Product[]; badge: string }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
      {items.map((p, i) => (
        <Reveal key={p.name} delay={i * 60}>
          <Card className="group h-full overflow-hidden border-border transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary-soft/60">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="grid h-full place-items-center text-primary/40">
                  <Package className="h-9 w-9 md:h-16 md:w-16" strokeWidth={1.2} />
                </div>
              )}
              <Badge className="absolute left-2 top-2 px-1.5 py-0.5 text-[10px] bg-background/90 text-primary-deep hover:bg-background md:left-3 md:top-3 md:px-2.5 md:py-0.5 md:text-xs">
                {badge}
              </Badge>
            </div>
            <CardContent className="p-3 md:p-5">
              <div className="font-display text-sm font-bold leading-tight md:text-lg">{p.name}</div>
              <div className="mt-2 space-y-1 text-[11px] md:mt-3 md:space-y-1.5 md:text-sm">
                <RowMeta label="Размер" value={p.size} />
                <RowMeta label="Кол-во" value={p.qty} />
                <RowMeta label="Назначение" value={p.purpose} />
              </div>
              <div className="mt-3 flex items-center justify-between rounded-lg border border-primary/20 bg-primary-soft/70 px-2.5 py-1.5 md:mt-4 md:px-4 md:py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-primary-deep md:text-sm">Цена</span>
                <span className="font-display text-base font-extrabold text-primary-deep md:text-2xl">{p.price ?? "По запросу"}</span>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

function RowMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2 border-b border-dashed border-border/70 pb-1 last:border-0 last:pb-0 md:gap-3 md:pb-1.5">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium text-foreground">{value}</span>
    </div>
  );
}

function WhyUs() {
  const items = [
    { icon: Layers, title: "Гибкие партии без переплаты за склад", text: "Не нужно закупать пакеты на 2 месяца вперёд и замораживать деньги в товаре." },
    { icon: Repeat, title: "Повторный заказ — одним сообщением", text: "WhatsApp или звонок. Не нужно заново заполнять заявку и согласовывать номенклатуру." },
    { icon: Factory, title: "Собственное производство в Алматы", text: "Контроль качества на всех этапах, прямая цена без наценки посредников." },
    { icon: Users, title: "Сети и небольшие точки", text: "Уже работаем с Magnum, Toimart, Galmart, Metro— и с магазинами у дома." },
    { icon: Truck, title: "Доставка от 20 000 ₸", text: "Обход торгового представителя по точкам Алматы, отгрузка по графику." },
    { icon: ShieldCheck, title: "Пищевая сертификация", text: "Соответствие ТР ТС 005/2011, HDPE — можно для пищевых продуктов." },
  ];
  return (
    <section id="why" className="bg-primary-soft/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionEyebrow>Почему выбирают нас</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl whitespace-pre-line font-display text-3xl font-extrabold md:text-4xl">
            Скорость и гибкость&nbsp;
            <span className="text-primary">{"\n"}- под ваш ритм продаж</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-primary-deep">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    { n: "01", title: "Первый контакт", text: "Пишете в WhatsApp или звоните — уточняем задачи вашей точки." },
    { n: "02", title: "Подбор ассортимента", text: "Собираем позиции под кассу, развес и полку с покупателями." },
    { n: "03", title: "Первая поставка", text: "От 20 000 ₸. Отгружаем со склада в Алматы." },
    { n: "04", title: "Закреплённый представитель", text: "Обходит точку, помогает планировать остатки." },
    { n: "05", title: "Повторный заказ", text: "Одно сообщение — и заказ уже в работе." },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionEyebrow>Как мы работаем</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold md:text-4xl">
            5 шагов от первого контакта до повторного заказа
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-5">
                <div className="font-display text-3xl font-black text-primary/20">{s.n}</div>
                <h3 className="mt-2 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary/40 md:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners: { name: string; logo?: string }[] = [
    { name: "Magnum", logo: magnumLogo.url },
    { name: "Toimart", logo: toimartLogo.url },
    { name: "Galmart", logo: galmartLogo.url },
    { name: "Metro", logo: metroLogo.url },
    { name: "Small", logo: smallLogo.url },
    { name: "Оптовые рынки" },
  ];
  return (
    <section id="partners" className="border-y border-border bg-primary-soft/40 py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionEyebrow>Нам доверяют</SectionEyebrow>
              <h2 className="mt-3 font-display text-2xl font-extrabold md:text-3xl">
                Работаем с сетями и независимой розницей
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              {"\n"}
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 grid grid-cols-6 gap-2 sm:gap-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex h-16 items-center justify-center rounded-xl border border-dashed border-primary/30 bg-background p-2 transition-colors hover:border-primary hover:bg-primary-soft sm:h-20 sm:p-3"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-center font-display text-xs font-bold text-primary-deep sm:text-sm">{p.name}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "[Имя, Фамилия]", org: "[Магазин / сеть]", city: "[Город]" },
    { name: "[Имя, Фамилия]", org: "[Магазин / сеть]", city: "[Город]" },
    { name: "[Имя, Фамилия]", org: "[Магазин / сеть]", city: "[Город]" },
  ];
  return (
    <section id="reviews" className="bg-primary-soft/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionEyebrow>Отзывы</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
            Что говорят наши клиенты
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card className="h-full border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{r.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {r.org} · {r.city}
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm italic text-muted-foreground">
                    [Текст отзыва — заменить реальной цитатой клиента о работе с
                    Туран Инвест Пласт: гибкость партий, скорость доставки,
                    качество пакетов.]
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    { q: "Какой минимальный объём заказа?", a: "Жёстких минимальных тиражей нет. Минимальная сумма первой поставки — 20 000 ₸ для доставки по Алматы. Повторные заказы формируем под ваш оборот." },
    { q: "Работаете ли по договору и с НДС?", a: "Да, работаем с ИП и ТОО по официальному договору. Все закрывающие документы предоставляем." },
    { q: "Как оформить повторный заказ?", a: "Одним сообщением в WhatsApp или звонком закреплённому менеджеру. Не нужно заново описывать номенклатуру — работаем по вашей истории заказов." },
    { q: "Какая минимальная сумма для доставки?", a: "Доставка по Алматы — от 20 000 ₸. Также действует обход точек торговым представителем." },
    { q: "Можно ли получить образцы перед первым заказом?", a: "Да, торговый представитель может завезти образцы на точку — пишите в WhatsApp, договоримся об удобном времени." },
    { q: "Работаете с сетевыми магазинами и дистрибьюторами?", a: "Да. Среди клиентов — Magnum, Toimart, Galmart и другие. Работаем и с несетевой розницей, и с оптовыми покупателями." },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1fr_1.6fr] md:px-6">
        <Reveal>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
            Частые вопросы закупщиков
          </h2>
          <p className="mt-4 text-muted-foreground">
            Не нашли ответ? Напишите в WhatsApp — ответим в течение рабочего часа.
          </p>
          <Button asChild className="mt-6 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> Задать вопрос
            </a>
          </Button>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`i${i}`} className="border-b border-border px-5 last:border-0">
                <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="bg-primary-soft/50 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <Reveal>
          <SectionEyebrow>Контакты</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
            Пишите или звоните — мы на связи
          </h2>
          <div className="mt-6 space-y-4">
            <ContactRow icon={MapPin} label="Адрес" value={ADDRESS} />
            <ContactRow icon={Phone} label="Телефон" value={PHONE_DISPLAY} href={PHONE_HREF} />
            <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow icon={Globe} label="Сайт" value={SITE} href={`https://${SITE}`} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Написать в WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-primary/30 text-primary-deep">
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" /> Позвонить
              </a>
            </Button>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Карта — Алматы, ул. Земнухова 3Б"
              src="https://yandex.com/map-widget/v1/?text=%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%20%D1%83%D0%BB.%20%D0%97%D0%B5%D0%BC%D0%BD%D1%83%D1%85%D0%BE%D0%B2%D0%B0%203%D0%91"
              className="h-64 w-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Card className="border-border">
            <CardContent className="p-6 md:p-8">
              <div className="font-display text-xl font-extrabold">
                Короткая форма — запасной канал
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Оставьте контакты — перезвоним и уточним потребности точки.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(WHATSAPP_HREF, "_blank");
                }}
              >
                <Input placeholder="Ваше имя" required />
                <Input placeholder="Магазин / компания" />
                <Input placeholder="Телефон" type="tel" required />
                <Textarea placeholder="Что вас интересует?" rows={4} />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-deep">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных. Быстрее всего —{" "}
                  <a className="underline" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                    написать в WhatsApp
                  </a>
                  .
                </p>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-primary-soft text-primary-deep">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function Footer() {
  return (
    <footer className="bg-primary-deep py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-4 max-w-sm text-sm text-white/70">
            {COMPANY}. Производство полиэтиленовых пакетов HDPE в Алматы.
            Сертификат ТР ТС 005/2011.
          </p>
          <div className="mt-4 space-y-1 text-sm text-white/80">
            <div>{ADDRESS}</div>
            <div>
              <a href={PHONE_HREF} className="hover:text-white">{PHONE_DISPLAY}</a>
              {" · "}
              <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-white/60">
            Разделы
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-white/60">
            Связь
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-white/50 md:px-6">
        © {new Date().getFullYear()} {COMPANY}. Все права защищены.
      </div>
    </footer>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-deep">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}
