package bj.immobilier.immobilier.repository;

import bj.immobilier.immobilier.model.Article;
import bj.immobilier.immobilier.model.Ville;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleDao extends JpaRepository<Article, Long> {



    Page<Article> findAllByRent(@Param("rent") boolean rent, Pageable pageable);


    Page<Article> findAllByLibelleContainingOrVilleOrCategorieOrPrixBetween(String libelle, Ville ville, String categorie, Integer prixStart, Integer prixEnd, Pageable pageable);





}
