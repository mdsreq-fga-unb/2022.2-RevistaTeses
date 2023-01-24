import { render, screen } from '@testing-library/react';

/* Testes para se fazer com funçao de Editar Contas:
    0. Se renderiza a pagina
    1. A coluna deve poder ser avaliada imediatamente depois de ser postada (33)
    2. A coluna deve poder receber comentários imediatamente após ser postada* (33)
    3. A coluna deve estar disponível imediatamente após a edição (34)
    4. A versão editada deve estar presente no lugar da versão anterior(34)
    5. A coluna deve ser excluída completamente da plataforma (35)
    6. Os comentários devem ser excluídos juntos da coluna* (35)
    7. As pontuações de comentários de usuários não deve ser alterada* (35)
    
*/