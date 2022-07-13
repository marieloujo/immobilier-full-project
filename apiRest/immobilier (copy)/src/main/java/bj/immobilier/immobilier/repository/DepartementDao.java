package bj.immobilier.immobilier.repository;

import bj.immobilier.immobilier.model.Article;
import bj.immobilier.immobilier.model.Departement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartementDao extends JpaRepository<Departement, Long> {
}
