import React, { useEffect, useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import usePosts from "./hooks/usePosts"
// TODO: Exercice 3 - Importer ThemeToggle
// TODO: Exercice 3 - Importer ThemeProvider et useTheme
// TODO: Exercice 1 - Importer le hook usePosts
// TODO: Exercice 2 - Importer le hook useLocalStorage
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // État local pour la recherche
  const [searchTerm, setSearchTerm] = useState('');
  // TODO: Exercice 4 - Ajouter l'état pour le tag sélectionné
  
  // TODO: Exercice 1 - Utiliser le hook usePosts pour récupérer les posts
  // Exemple: const { posts, loading, error } = usePosts();
   const { posts, loading, error } = usePosts({searchTerm});

  // TODO: Exercice 2 - Utiliser useLocalStorage pour le mode de défilement
  const [scrollMode, setScrollMode] = useLocalStorage('scrollMode', true);

  
  // TODO: Exercice 3 - Utiliser useCallback pour les gestionnaires d'événements
  
  // Gestionnaire pour la recherche
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  
  // TODO: Exercice 4 - Ajouter le gestionnaire pour la sélection de tag
  
  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
             <h1>Othmane El Wahidi El Alaoui</h1>
          <h1 className="display-5 fw-bold">Blog</h1>
          {/* TODO: Exercice 3 - Ajouter le ThemeToggle */}
        </div>
      </header>
      
      <main>
        <PostSearch onSearch={handleSearchChange} />
        
        {/* TODO: Exercice 1 - Afficher un message d'erreur si nécessaire */}
        {error && <p class="alert alert-danger text-center fw-semibold my-4">
  An error occurred while loading posts
</p>
}
        
        {/* TODO: Exercice 4 - Ajouter le composant PostDetails */}
        
        {/* TODO: Exercice 1 - Passer les props nécessaires à PostList */}
         <PostList posts={posts}/>
              </main>
      
      <footer className="pt-3 mt-4 text-center border-top">
     
        <p>
          TP React Hooks - Blog &middot; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
