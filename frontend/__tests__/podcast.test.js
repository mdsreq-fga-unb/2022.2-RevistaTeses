import { render, screen } from '@testing-library/react';

/* Testes para se fazer com funçao de Editar Contas:
    0. Se renderiza a pagina
    1. O podcast deve poder ser avaliado imediatamente depois de ser postado (36)
    2. O podcast deve poder receber comentários imediatamente após ser postado* (36)
    3. O podcast deve estar disponível imediatamente após a edição (37)
    4. A versão editada deve estar presente no lugar da versão anterior (37)
    5. O podcast deve ser excluído completamente da plataforma (38)
    6. Os comentários devem ser excluídos juntos do podcast* (38)
    7. As pontuações de comentários de usuários não deve ser alterada* (38)
*/