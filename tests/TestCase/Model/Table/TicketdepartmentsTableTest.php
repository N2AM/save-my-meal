<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\TicketdepartmentsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\TicketdepartmentsTable Test Case
 */
class TicketdepartmentsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\TicketdepartmentsTable
     */
    public $Ticketdepartments;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.ticketdepartments',
        'app.creator',
        'app.user_groups',
        'app.bills',
        'app.editor',
        'app.notices',
        'app.users',
        'app.products',
        'app.stages',
        'app.developers',
        'app.stagedetails',
        'app.tasks',
        'app.develops',
        'app.responses',
        'app.tickets',
        'app.user_activities',
        'app.user_contacts',
        'app.user_details',
        'app.user_email_recipients',
        'app.user_email_signatures',
        'app.user_email_templates',
        'app.user_socials'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Ticketdepartments') ? [] : ['className' => 'App\Model\Table\TicketdepartmentsTable'];
        $this->Ticketdepartments = TableRegistry::get('Ticketdepartments', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Ticketdepartments);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
