<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\OwnersTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\OwnersTable Test Case
 */
class OwnersTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\OwnersTable
     */
    public $Owners;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.owners',
        'app.creator',
        'app.editor',
        'app.users',
        'app.machine_owners',
        'app.machine_details',
        'app.machines',
        'app.reservations',
        'app.rates'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Owners') ? [] : ['className' => 'App\Model\Table\OwnersTable'];
        $this->Owners = TableRegistry::get('Owners', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Owners);

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