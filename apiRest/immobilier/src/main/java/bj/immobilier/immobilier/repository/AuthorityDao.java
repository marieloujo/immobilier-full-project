package bj.immobilier.immobilier.repository;

import bj.immobilier.immobilier.model.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityDao extends JpaRepository<Authority, Long> {

    Authority findByRole(String role);

}
