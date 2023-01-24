import { render, screen } from '@testing-library/react';
import Perfil from '../src/pages/perfil';

/* Testes para se fazer com o perfil:
    0. Se renderiza a pagina
    -Como editor chefe:
    1. A conta a ser atribuída a função de editor deve existir (7)
    2. A conta que foi atribuída a função de editor (7)
    3. A conta que recebeu a função de editor deve ter acesso às suas funções imediatamente (7)
    4. Deve poder fazer postagens (10)
    5. As postagens deve ter como autor "Redação Revista Teses" (10)
    6. Deve ver todas as contas cadastradas na plataforma (17)
    7. Deve ter acesso às mesmas funções que o leitor e editor (17)
    -Como Editor:
    8. Apenas o editor têm acesso à criação de notícias (12)
    9. A área de criação de notícias deve ficar na página de perfil do editor (12)
    10. As notícias a serem postadas devem ficar disponíveis imediatamente após ser realizado (12)
    11. Deve poder ver as notícias que postou (16)
    12. Deve poder ver a avaliação da notícia (16)
    13. Deve ter acesso à feature 03 (16)
    14. Deve ter acesso à área de criação de notícias (16)
    15. A coluna deve estar disponível imediatamente após a postagem (33)
    16. O link deve estar disponível imediatamente após a postagem (36)
    -Como Leitor:
    17. Deve poder ver os próprios dados (14)
    18. Deve poder editar os próprios dados (14)

*/ 