"""added Registration model

Revision ID: 88eaac8a8dfd
Revises: fd025260834c
Create Date: 2024-04-09 13:00:46.795076

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '88eaac8a8dfd'
down_revision = 'fd025260834c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('accountings', schema=None) as batch_op:
        batch_op.drop_constraint('fk_accountings_student_id_users', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_accountings_student_id_users'), 'users', ['student_id'], ['id'], ondelete='CASCADE')

    with op.batch_alter_table('salaries', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('salaries', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=False)

    with op.batch_alter_table('accountings', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_accountings_student_id_users'), type_='foreignkey')
        batch_op.create_foreign_key('fk_accountings_student_id_users', 'users', ['student_id'], ['id'])

    # ### end Alembic commands ###