package bj.immobilier.immobilier.repository;

import bj.immobilier.immobilier.model.Commune;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommuneDao extends JpaRepository<Commune, Long> {
}
