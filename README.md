# Currículo em Ação EMFAL

Aplicativo da Escola Municipal Francisca Alves (EMFAL), SMED-BH, GERED-PAMPULHA.

Os professores consultam as habilidades da BNCC e do Currículo Referência de Minas Gerais por ano e componente, com atividades e questões sugeridas, montam provas e marcam o que foi dado e consolidado em cada turma.

A tela fica aqui (GitHub Pages). Os dados (habilidades, atividades, questões, turmas e registros) ficam na planilha da escola no Google Drive, acessada pelo Apps Script. O acesso usa o mesmo usuário e senha do Corretor EMFAL.

## Atividades com IA (pasta `atividades/`)

Página em que o professor escolhe uma habilidade (as mesmas da planilha do Currículo, com o mesmo login) e uma inteligência artificial aberta (Qwen 2.5, via wllama/llama.cpp, guardado em `atividades/wllama/`) gera atividades com gabarito no próprio aparelho. Depois do primeiro acesso com internet, as habilidades e o modelo ficam guardados e a página funciona offline. Usa a placa gráfica quando o navegador permite e, se não, o processador; funciona no Chrome do celular e do computador.
