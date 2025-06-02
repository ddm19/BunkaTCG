-- users (extras a auth.users)
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  created_at timestamptz default now()
);

-- productos
create table public.products (
  id bigserial primary key,
  name text not null,
  price numeric(10,2) not null,
  image text,
  stock int default 0
);

-- pedidos
create table public.orders (
  id bigserial primary key,
  user_id uuid references auth.users,
  status text default 'pending',
  total numeric(10,2),
  created_at timestamptz default now()
);

-- líneas de pedido
create table public.order_items (
  order_id bigint references public.orders on delete cascade,
  product_id bigint references public.products,
  quantity int,
  price numeric(10,2),
  primary key (order_id, product_id)
);

-- pagos
create table public.payments (
  id bigserial primary key,
  order_id bigint references public.orders,
  provider text,          -- 'stripe', 'redsys', 'revolut'
  provider_ref text,      -- id del pago en el TPV
  amount numeric(10,2),
  status text,            -- 'captured', 'failed'...
  created_at timestamptz default now()
);
