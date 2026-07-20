# Norte Brasil Digital

Landing page da Norte Brasil Digital, construída com React Router, React e Tailwind CSS.

## Desenvolvimento

```bash
vp install
vp run dev
```

## Validação

```bash
vp check
vp test
vp run build
```

O build é totalmente estático e gera a página pré-renderizada em `build/client`.

## Cloudflare Pages

Para conectar o repositório pelo painel do Cloudflare Pages, use:

- Branch de produção: `master`
- Comando de build: `pnpm build`
- Diretório de saída: `build/client`

Para testar ou publicar com o Wrangler:

```bash
vp run preview
vp run deploy
```

O deploy via CLI requer autenticação no Cloudflare e o projeto `norte-brasil-digital` já criado na conta.
