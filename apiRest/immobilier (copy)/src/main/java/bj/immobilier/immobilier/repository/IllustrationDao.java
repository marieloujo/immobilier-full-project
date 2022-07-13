package bj.immobilier.immobilier.repository;

import bj.immobilier.immobilier.model.Illustration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IllustrationDao extends JpaRepository<Illustration, Long> {
}
