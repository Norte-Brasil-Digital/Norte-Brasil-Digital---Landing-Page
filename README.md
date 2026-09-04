# NBD SYS — Gestão inteligente

Landing page da Norte Brasil Digital para o varejo de Parauapebas e região. Construída com Astro e TypeScript, com HTML estático, CSS por componente e fontes Inter/Poppins hospedadas localmente.

## Ambiente e desenvolvimento

Instale o CLI global [Vite+](https://viteplus.dev/guide/) e abra um novo terminal para atualizar o PATH. O pacote local `vite-plus` não substitui o CLI global responsável pelo ambiente e pelo gerenciador de pacotes.

```powershell
vp env doctor
vp install
vp run dev
```

O projeto fixa Node 24.20.0 em `.node-version` e pnpm em `package.json`. Se faltarem shims, execute `vp env setup` e reinicie o terminal. O servidor de desenvolvimento usa `http://localhost:4321`.

Use `vp run dev` e `vp run build` para executar o Astro. Os comandos internos `vp dev` e `vp build` iniciam o Vite diretamente e não substituem os scripts Astro.

## Validação e prévia

```powershell
vp check
vp run check:astro-format
vp test
vp run typecheck
vp run build
vp run preview
```

`vp check` valida os formatos suportados, lint e TypeScript. `vp run typecheck` também verifica templates e scripts `.astro`; `vp run format:astro` formata esses componentes. Os testes unitários cobrem a composição e a codificação das mensagens de WhatsApp.

Para os testes no navegador, instale o Chromium uma vez:

```powershell
vp exec playwright install chromium
vp run build
vp run test:e2e
```

Se o Chrome já estiver instalado, no PowerShell use `$env:PLAYWRIGHT_CHANNEL = 'chrome'` antes de executar os testes. O Playwright inicia uma prévia local, valida larguras de 320, 390, 768 e 1440 px, menu por teclado, formulário, conteúdo sem JavaScript e página 404. As capturas ficam em `test-results/`. As chamadas ao Umami e ao WhatsApp são interceptadas nos testes; nenhuma mensagem é enviada.

## Organização e conteúdo

- `app/pages/`: página principal e erro 404 em português.
- `app/components/`: seções com estilos locais; `app/styles/global.css`: cores, tipografia e estilos compartilhados.
- `app/lib/whatsapp.ts`: número comercial e mensagem de demonstração, compartilhados pelos links e formulário.
- `app/layouts/Layout.astro`: metadados e o identificador Umami já utilizado pela empresa.

O formulário usa JavaScript mínimo para abrir o WhatsApp com os campos opcionais preenchidos. O visitante revisa e envia a mensagem no próprio WhatsApp. Não há backend, armazenamento de contatos nem envio dos campos ao analytics. Sem JavaScript, o formulário permanece oculto e o link direto continua disponível; a navegação e as perguntas frequentes também funcionam.

São anunciados apenas PDV, estoque, financeiro e relatórios. O desenho de módulos na apresentação é uma ilustração em HTML/CSS, não uma captura do sistema. Não são publicados números de clientes, depoimentos, preços, prazos, gratuidade ou integrações não confirmados. O logotipo e os contatos institucionais foram preservados.

## Cloudflare Pages

O build gera HTML e assets em `build/client`, preservando a saída já configurada no projeto `norte-brasil-digital`. Não é necessário adapter de servidor para este site estático.

- Branch de produção existente: `master`.
- Comando no painel existente: `pnpm build` (executa `astro build`).
- Diretório de saída: `build/client`.
- Runtime de build: Node 24.20.0, conforme `.node-version`.

O script `vp run deploy` faz o build e publica via Wrangler; exige autenticação na conta Cloudflare. Ele é uma ação separada da prévia local. Nenhuma publicação é necessária para desenvolver ou validar a página.

O Astro utiliza seu próprio Vite compatível. A configuração Vite+ fica dedicada a checks e testes, sem override global que substitua o Vite do Astro.

## Referências editoriais e técnicas

- [Sebrae: sistema ERP e organização da gestão](https://blog.rn.sebrae.com.br/sistema-erp/).
- [Hiper: comunicação de sistemas para o pequeno varejo](https://hiper.com.br/), consultada como referência de mercado, sem reprodução de texto.
- [Astro: sites orientados a conteúdo](https://docs.astro.build/en/concepts/why-astro/).
- [Astro: publicação na Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/).
