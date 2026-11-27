# SilvOS · Official Website

[![Website](https://img.shields.io/badge/Website-silviodarko.github.io-66BDE8?style=for-the-badge)](https://silviodarko.github.io/)
[![Status](https://img.shields.io/badge/Status-Pre--release-22404D?style=for-the-badge)](https://silviodarko.github.io/)

**Your system. Your rules.**

Site público do **SilvOS**, um projeto independente de Linux com identidade Liquid Glass, IA local **UNITY** e foco em privacidade, transparência e controle do usuário.

### Website

https://silviodarko.github.io/

### Roadmap e desenvolvimento

- [Roadmap público](https://github.com/silviodarko/silviodarko/blob/main/SILVOS_ROADMAP.md)
- [Perfil e portfólio técnico](https://github.com/silviodarko)
- Status: **Alpha 0.3 instalável homologada em QEMU UEFI** (disco qcow2 descartável, Niri, Noctalia, rede, silvos-cli e SHA-256 do disco sentinela). Ainda sem ISO pública, instalador certificado para hardware real ou data anunciada.

### Próximo marco: silvos update

- `silvos-cli` empacotado e exercitado em contêiner Arch descartável.
- Assinatura GPG **temporária** testada em repositório experimental, sem chave de release.
- `silvos update --check` funciona em laboratório, consultando somente a base local.
- `silvos update` permanece **bloqueado** até validar repositório assinado, upgrade N → N+1 e recuperação em VM.
- Terminal exibido no site é **prévia conceitual**, não comando executado.

### Tecnologias da landing page

HTML sem framework, CSS responsivo e JavaScript progressivo, com recursos visuais locais. Sem analytics, fontes externas, formulários, rastreadores ou cookies.

### Developer Program

O criador participa do **[GitHub Developer Program](https://github.com/developer)**, estudando e desenvolvendo integrações com a GitHub API. A participação é individual, sem associação ou endosso oficial do GitHub ao SilvOS.

### Desenvolvimento e privacidade

Este repositório hospeda **apenas o site público**. O código principal da distribuição SilvOS permanece em repositório privado separado. A demonstração do UNITY na página é conceitual e não envia comandos nem acessa dados pessoais.

A prévia Renascimento usa `index.html`, `renascimento.css` e `renascimento-social.svg`. Os arquivos anteriores são preservados para revisão e rollback. O GitHub Pages pode publicar a partir da branch `main`, pasta `/(root)`.

---

Built in Brazil · Independent Linux project.

## Prévia Renascimento

A nova página apresenta UNITY Aurora, VULCANO, Mnemosyne, NEXUS e UNITY Mobile com estados explícitos de maturidade. A esfera é uma ilustração conceitual, não captura do produto. Sem nova ISO, data de lançamento ou download anunciado. A branch é uma prévia pública; não mesclar antes de revisão visual e confirmação dos marcos.
