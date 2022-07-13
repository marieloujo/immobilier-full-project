package bj.immobilier.immobilier.repository;

import bj.immobilier.immobilier.model.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface VilleDao extends JpaRepository<Ville, Long> {



}
