module.exports= {
    pages: {
        'investimento-folha': {
            entry: './src/views/investimento-folha/main.js',
            template: 'public/index.html',
            title: 'Investimento Folha',
            chunks: ['chunk-vendors', 'chunck-common', 'investimento-folha']
        },
        'investimento-instrutor': {
            entry: './src/views/investimento-instrutor/main.js',
            template: 'public/index.html',
            title: 'Investimento Instrutor',
            chunks: ['chunk-vendors', 'chunck-common', 'investimento-instrutor']
        },
        'processo-seletivo-busca-por-candidato': {
            entry: './src/views/processo-seletivo-busca-por-candidato/main.js',
            template: 'public/index.html',
            title: 'Busca por candidato',
            chunks: ['chunk-vendors', 'chunck-common', 'processo-seletivo-busca-por-candidato']
        },
        'processo-seletivo-busca-por-vagas': {
            entry: './src/views/processo-seletivo-busca-por-vagas/main.js',
            template: 'public/index.html',
            title: 'Busca por vagas',
            chunks: ['chunk-vendors', 'chunck-common', 'processo-seletivo-busca-por-vagas']
        },
        'processo-seletivo-dados-da-vaga-cadastro-edicao': {
            entry: './src/views/processo-seletivo-dados-da-vaga-cadastro-edicao/main.js',
            template: 'public/index.html',
            title: 'Dados da vaga - Cadastro/Edição',
            chunks: ['chunk-vendors', 'chunck-common', 'processo-seletivo-dados-da-vaga-cadastro-edicao']
        },
        'processo-seletivo-dados-da-vaga-visualizacao': {
            entry: './src/views/processo-seletivo-dados-da-vaga-visualizacao/main.js',
            template: 'public/index.html',
            title: 'Dados da Vaga - Visualização',
            chunks: ['chunk-vendors', 'chunck-common', 'processo-seletivo-dados-da-vaga-visualizacao']
        },
        'processo-seletivo-dados-do-candidato-cadastro-edicao': {
            entry: './src/views/processo-seletivo-dados-do-candidato-cadastro-edicao/main.js',
            template: 'public/index.html',
            title: 'Dados do candidato - Cadastro/Edição',
            chunks: ['chunk-vendors', 'chunck-common', 'processo-seletivo-dados-do-candidato-cadastro-edicao']
        },
        'processo-seletivo-dados-do-candidato-status': {
            entry: './src/views/processo-seletivo-dados-do-candidato-status/main.js',
            template: 'public/index.html',
            title: 'Dados do candidato - Status',
            chunks: ['chunk-vendors', 'chunck-common', 'processo-seletivo-dados-do-candidato-status']
        },
        'processo-seletivo-dados-do-candidato-visualizacao': {
            entry: './src/views/processo-seletivo-dados-do-candidato-visualizacao/main.js',
            template: 'public/index.html',
            title: 'Dados do candidato - Visualizacao',
            chunks: ['chunk-vendors', 'chunck-common', 'processo-seletivo-dados-do-candidato-visualizacao']
        }
    }
}